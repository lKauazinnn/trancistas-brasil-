param([string]$msg = "")

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  TRANCISTAS BRASIL - Enviar para Git  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$git = Get-Command git -ErrorAction SilentlyContinue
if (-not $git) {
  Write-Host "[ERRO] Git nao encontrado." -ForegroundColor Red
  exit 1
}

$remote = git remote get-url origin 2>$null
if (-not $remote) {
  git remote add origin https://github.com/lKauazinnn/trancistas-brasil-.git
  Write-Host "[OK] Remote adicionado." -ForegroundColor Green
} else {
  git remote set-url origin https://github.com/lKauazinnn/trancistas-brasil-.git
}

Write-Host "Arquivos modificados:" -ForegroundColor Yellow
git status -s
Write-Host ""

if (-not $msg) {
  $msg = Read-Host "Mensagem do commit (Enter = 'update')"
  if (-not $msg) { $msg = "update" }
}

git add .
git commit -m $msg
$branch = git rev-parse --abbrev-ref HEAD

Write-Host "Enviando branch '$branch' para o GitHub..." -ForegroundColor Yellow
git push -u origin $branch

if ($LASTEXITCODE -eq 0) {
  Write-Host ""
  Write-Host "[OK] Enviado com sucesso!" -ForegroundColor Green
  Write-Host "    https://github.com/lKauazinnn/trancistas-brasil-" -ForegroundColor Green
} else {
  Write-Host ""
  Write-Host "[ERRO] Falha no push." -ForegroundColor Red
}

Read-Host "Pressione Enter para sair"

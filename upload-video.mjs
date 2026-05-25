// ─────────────────────────────────────────────────────────────
//  Upload do vídeo para Supabase Storage
//
//  ANTES DE RODAR:
//  1. Coloque o arquivo de vídeo em:
//     public/media/videos/trancistas-kamyla.mov
//  2. Execute: node upload-video.mjs
//  3. Copie a URL pública exibida no final
//  4. Substitua o src nos VideoPlayer no código
// ─────────────────────────────────────────────────────────────
import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'

const SUPABASE_URL     = 'https://okmnldezbvcjhiicudwe.supabase.co'
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rbW5sZGV6YnZjamhpaWN1ZHdlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTY5Nzg5NiwiZXhwIjoyMDk1MjczODk2fQ.b4yBQVPdYxacnw0GJVckL61dS1TMXj54rLM2JYbhBmA'
const BUCKET      = 'media'
const REMOTE_PATH = 'videos/trancistas-kamyla.mov'

// Aceita o nome do arquivo como argumento ou usa o padrão
const LOCAL_FILE = process.argv[2] || 'trancistas-kamyla.mov'
const LOCAL_PATH = path.resolve(`./public/media/videos/${LOCAL_FILE}`)

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

async function main() {
  if (!fs.existsSync(LOCAL_PATH)) {
    console.error(`\n[ERRO] Arquivo não encontrado: ${LOCAL_PATH}`)
    console.error('\nColoque o vídeo em public/media/videos/ e rode novamente.')
    console.error('Exemplo: node upload-video.mjs meu-video.mov\n')
    process.exit(1)
  }

  const sizeMB = (fs.statSync(LOCAL_PATH).size / 1024 / 1024).toFixed(1)
  console.log(`\nArquivo: ${LOCAL_FILE} (${sizeMB} MB)`)

  // Cria o bucket se não existir
  const { error: bucketErr } = await supabase.storage.createBucket(BUCKET, { public: true })
  if (bucketErr && !bucketErr.message.includes('already exists')) {
    console.error('Erro ao criar bucket:', bucketErr.message)
    process.exit(1)
  }
  console.log('✓ Bucket "media" pronto')
  console.log('  Enviando... (pode demorar para arquivos grandes)')

  const fileBuffer = fs.readFileSync(LOCAL_PATH)

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(REMOTE_PATH, fileBuffer, {
      contentType: 'video/quicktime',
      cacheControl: '31536000',
      upsert: true,
    })

  if (error) {
    console.error('\n[ERRO] Upload falhou:', error.message)
    if (error.message.includes('size')) {
      console.error('\n  O plano free do Supabase tem limite de 50 MB por arquivo.')
      console.error('  Opções:')
      console.error('    • Supabase Pro ($25/mês) — até 5 GB')
      console.error('    • YouTube como "não listado" + embed')
    }
    process.exit(1)
  }

  const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${REMOTE_PATH}`
  console.log('\n✓ Upload concluído com sucesso!\n')
  console.log('  URL pública do vídeo:')
  console.log(`  ${publicUrl}\n`)
  console.log('  Próximo passo — atualize o src nos componentes:')
  console.log('    src/components/sections/AprendizadoAncestral.jsx')
  console.log('    src/components/sections/FuturoEncerramento.jsx\n')
}

main()

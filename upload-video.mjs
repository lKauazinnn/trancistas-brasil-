// ─────────────────────────────────────────────────────────────
//  Upload do vídeo para Supabase Storage
//
//  COMO USAR:
//    node upload-video.mjs
//
//  O script envia public/media/videos/documentario-web.mp4 (42 MB)
//  para o bucket "media" do Supabase e exibe a URL pública.
//  Cole essa URL em Vercel → Settings → Environment Variables:
//    VITE_VIDEO_DOCUMENTARIO = <url copiada>
// ─────────────────────────────────────────────────────────────
import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'

const SUPABASE_URL     = 'https://okmnldezbvcjhiicudwe.supabase.co'
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rbW5sZGV6YnZjamhpaWN1ZHdlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTY5Nzg5NiwiZXhwIjoyMDk1MjczODk2fQ.b4yBQVPdYxacnw0GJVckL61dS1TMXj54rLM2JYbhBmA'
const BUCKET      = 'media'
const REMOTE_PATH = 'videos/documentario-web.mp4'
const LOCAL_PATH  = path.resolve('./public/media/videos/documentario-web.mp4')

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

async function main() {
  if (!fs.existsSync(LOCAL_PATH)) {
    console.error(`\n[ERRO] Arquivo não encontrado: ${LOCAL_PATH}\n`)
    process.exit(1)
  }

  const sizeMB = (fs.statSync(LOCAL_PATH).size / 1024 / 1024).toFixed(1)
  console.log(`\nArquivo: documentario-web.mp4 (${sizeMB} MB)`)

  const { error: bucketErr } = await supabase.storage
    .createBucket(BUCKET, { public: true })
  if (bucketErr && !bucketErr.message.includes('already exists')) {
    console.error('Erro ao criar bucket:', bucketErr.message)
    process.exit(1)
  }

  console.log('Enviando para Supabase... (pode demorar ~1 min)')

  const fileBuffer = fs.readFileSync(LOCAL_PATH)
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(REMOTE_PATH, fileBuffer, {
      contentType: 'video/mp4',
      cacheControl: '31536000',
      upsert: true,
    })

  if (error) {
    console.error('\n[ERRO] Upload falhou:', error.message)
    process.exit(1)
  }

  const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${REMOTE_PATH}`
  console.log('\n✓ Upload concluído!\n')
  console.log('  URL pública:')
  console.log(`  ${publicUrl}\n`)
  console.log('  Próximo passo:')
  console.log('  No Vercel → Settings → Environment Variables, adicione:')
  console.log(`  VITE_VIDEO_DOCUMENTARIO = ${publicUrl}\n`)
}

main()

// app/not-found.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    // <div className="min-h-screen bg-background flex items-center justify-center">
    //   <div className="text-center">
    //     <h1 className="text-4xl font-bold mb-4">404</h1>
    //     <p className="text-muted-foreground mb-8">Halaman tidak ditemukan</p>
    //     <Link 
    //       href="/" 
    //       className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90"
    //     >
    //       Kembali ke Home
    //     </Link>
    //   </div>
    // </div>
    <main className='min-h-[70vh] w-full px-6 py-16 grid place-items-center bg-background text-foreground'>
      <section className='w-full max-w-xl rounded-lg border border-border bg-card p-8 md:p-10' aria-labelledby='not-found-title'>
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className='text-5xl font-bold tracking-tight md:text-6xl'>404</h1>
          <p className='text-balance text-lg md:text-xl'>Halaman tidak ditemukan</p>
          <p className='text-muted-foreground'>Ups! Halaman yang kamu cari tidak ada atau sudah dipindahkan.</p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild className='bg-[var(--color-chart-2)] text-[var(--color-background)] hover:opacity-90'>
              <Link href="/">Kembali ke Beranda</Link>
            </Button>
            <Button asChild variant="outline" className='border-border bg-transparent'>
              <Link href="/support">Butuh Bantuan?</Link>
            </Button>
          </div>
          <p className='mt-6 text-xs text-muted-foreground'>Kode: 404 Not Found</p>
        </div>
      </section>
    </main>
  )
}
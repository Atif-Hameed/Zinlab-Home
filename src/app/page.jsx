import Bookmarks from '@/components/home/bookmark';
import FromPdf from '@/components/home/fromPdf';
import FromPdfCarousel from '@/components/home/fromPdfCarousel';
import Header from '@/components/home/header'
import ToPdf from '@/components/home/toPdf';

export default function Home() {
  return (
    <div>
      <Header />
      <Bookmarks />
      <FromPdfCarousel />
      <FromPdf />
      <ToPdf/>
    </div>
  );
}

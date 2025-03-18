import MenuBar from '../components/MenuBar';

export default function Home() {
  return (
    <><MenuBar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
        <h1 className="text-4xl font-bold text-pink-600">Hello world</h1>
        <p className="mt-4 text-lg text-gray-700">สวัสดีค่ะ ขอต้อนรับสู่หน้าเว็บของเรา</p>
      </main>
    </>
  );
}



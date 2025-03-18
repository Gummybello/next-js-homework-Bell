import MenuBar from '../../components/MenuBar';

export default function Contact() {
  return (
    <><MenuBar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-50">
        <h1 className="text-4xl font-bold text-purple-600">Contact Page</h1>
        <p className="mt-4 text-lg text-gray-700">โปรดติดต่อเรา099-555-2558</p>
      </main>
    </>
  );
}


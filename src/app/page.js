import MenuBar from '../components/MenuBar';

export default function Home() {
  return (
    <div className="wrapper px-[16px] ">
      {/*Top bar header*/}
      <header className=" flex justify-between items-center mb-[16px]"> 
        <h1 className="text-[50px] font-bold text-[#283593] ">BELLO</h1>
        <img className="w-[24px] h-[24px]"
        src="/image.png">
        </img>
      </header>
      {/* Main content */}
    <main className="flex flex-col gap-[16px]">
      <input type="text" placeholder="Search"
      className="px-[16px] pl-[24px] border-blue-500 border-[1px] rounded-[100px] w-[100%] py-[10px]" />
      <img className="db rounded-[24px] w-[100%]" src="/image 2.png" />
      <img className="db rounded-[24px] w-[100%]" src="/image3.png.png" />
    </main>
    </div>
  );
}



import MenuBar from '../components/MenuBar';
import DogCard from '../components/DogCard';

export default async function Home() {

const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
const resJson = await response.json()
const meals = resJson.meals

console.log(meals)

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

    
    {meals.map(meals => (
     <DogCard 
     key={meals.strMeal}
     meals={meals.strMeal}  
      />
    ))}
    


      /* <img className="db rounded-[24px] w-[100%]" src="/image 2.png" />
      <img className="db rounded-[24px] w-[100%]" src="/image3.png.png" /> */
    </main>
    </div>
  );
}



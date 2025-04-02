export default function DogCard({ meals = 'No strMeal'}){
    return (
        <div className="shadow-md rouned-[8px] p-[16px] flex flex-col gap-[8px]">
         <div className="text-[16px] font bold">{ meals }</div>
        </div>
    )
}
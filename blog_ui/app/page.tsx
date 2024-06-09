import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    
    <div className="min-h-screen bg-gradient-to-tr from-orange-300 to-orange-100 dark:bg-gradient dark:from-blue-700 dark:to-blue-900">
      <div className="flex justify-center h-full">
        <div className="mt-20 bg-white rounded-lg shadow-lg p-60 w-full max-w-4xl">
          
          <NavBar/>
        </div>
       </div>
    </div>
  );
}

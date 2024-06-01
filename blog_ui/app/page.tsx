import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    
    <div className="min-h-screen bg-transparent bg-gradient-to-tr from-orange-300 to-orange-100 dark:bg-gradient dark:from-blue-700 dark:to-blue-900 backdrop-blur-xl">
      <NavBar/>
      <div className="flex justify-center items-center h-full mt-16">
        <div className="bg-white rounded-lg shadow-lg p-60 w-full max-w-4xl">
            {/* <h1>Hello</h1> */}
        </div>
       </div>
    </div>
  );
}

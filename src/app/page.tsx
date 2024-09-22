import {Protest_Guerrilla} from "next/font/google"
const font = Protest_Guerrilla({weight:"400" , subsets:['latin-ext']})

export default function Home() {
  return (
    <div className={`h-50 w-1/2  shadow-xl shadow-blue-600 flex justify-center items-center  rounded-5xl m-auto mt-52`}>
      <h1 className={`text-white ${font.className} text-9xl hover:text-blue-500 transition  font-sans animate-pulse`}>Hello World</h1>
    </div>
  );
}
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner(){
    return(
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 self-stretch  rounded-lg flex justify-between items-center">
        <div>
          <strong className="text-white font-black block text-2xl">Não encontrou seu duo ?</strong>
          <span className="text-zinc-400 block  ">Publique um anúncio para encontrar novos Players!</span>
        </div>
        <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex gap-3 items-center">
         <MagnifyingGlassPlus size={24}/> Publicar anuncio 
        </button>

      </div>
    </div>
    )
}
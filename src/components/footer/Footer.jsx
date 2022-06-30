export const Footer = () => {
  return (
    <>
      <footer className="text-white bg-black border-t-[1px] border-zinc-600 mt-24 p-8">
        <div className="flex justify-start items-start">
          <div className="max-w-[80vw]">
            <ul className="mb-4 flex">
              <li className="mr-[30px] cursor-pointer">Temos de Uso</li>
              <li className="mr-[30px] cursor-pointer">
                Política de Privacidade
              </li>
              <li className="mr-[30px] cursor-pointer">Blog</li>
              <li className="mr-[30px] cursor-pointer">FAQ</li>
            </ul>
            <span className="text-zinc-600 font-light">
              © 2022 NextLv. Todos os direitos reservados. Todos os vídeos e
              programas nesta plataforma são marcas registradas e todas as
              imagens e conteúdos relacionados são de propriedade da NextLv Inc.
              Duplicações ou cópias são estritamente proibidas. Todos os
              direitos reservados.
            </span>
          </div>
          <div className="px-8">
            <h3 className="font-bold text-2xl">NextLv App</h3>
            <div className="flex justify-between">
              <i className="ri-app-store-fill text-[40px] cursor-pointer"></i>
              <i className="ri-google-play-fill text-[40px] cursor-pointer"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

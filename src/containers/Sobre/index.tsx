import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores natus cumque nihil nisi asperiores porro expedita, esse architecto inventore cupiditate iusto non vitae eos, repudiandae dignissimos nulla odio optio enim.
    </Paragrafo>
    <GithubSecao>
    <img src="https://github-readme-stats.vercel.app/api?username=ercrrc&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ercrrc&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)

export default Sobre

import React from "react";
import Button from "./Button";

function Cursos(){

    return (
        <div>
            <div class="container-md">
            <div class="row">
            <div class="col">
                
        <h1>Horários dos cursos</h1>
            <div class="alert alert-success" role="alert">
                Horários válidos somente para o período 2023.2
            </div>

            <ul>
                <li><a href="#computacao">Ciência da Computação</a></li>
                <li><a href="#medicina">Medicina</a></li>
                <li><a href="#enfermagem">Enfermagem</a></li>
            </ul>
        

       <h2 id="computacao" class="cursos">Ciência da Computação</h2>
       <Button/>
       
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Descrição do curso
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                O Curso de Ciência da Computação da UFFS é um curso que pretende, através de bases sólidas da área de computação, formar cientistas capazes de terem um papel importante em áreas da tecnologia da informação (TI), tanto na indústria quanto na academia.
              </div>
            </div>
          </div>
          

        <div class="row">
            <div class="col">

       <h3>1° semestre</h3>
            <table>
                <tr>
                <th>Curso</th>
                <th>Horário</th>
                </tr>
                <tr>
                <td>Algoritmos</td>
                <td>Seg123</td>
                </tr>
                <tr>
                <td>Filosofia</td>
                <td>Ter45</td>
                </tr>
            </table>
        </div>

        <div class="col">
        <h3>2° semestre</h3>
        <table>
            <tr>
            <th>Curso</th>
            <th>Horário</th>
            </tr>
            <tr>
            <td>Estrutura de Dados</td>
            <td>Sex123</td>
            </tr>
            <tr>
            <td>Pesquisa e ordenação de Dados</td>
            <td>Qua45</td>
            </tr>
        </table>
    </div>
    </div>

        <h2 id="medicina" class="cursos">Medicina</h2>
        <Button/>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Descrição do curso
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Busca promover a formação médica em que a humanização seja aliada ao desenvolvimento científico e tecnológico e o objeto da prática seja a necessidade das pessoas e das comunidades, onde os médicos sejam capazes de atuar em todos os níveis de atenção integral à saúde
                  </div>
                </div>
              </div>


              <div class="row">
                <div class="col">

        <h3>1° semestre</h3>
            <table>
                <tr>
                <th>Curso</th>
                <th>Horário</th>
                </tr>
                <tr>
                <td>Anatomia</td>
                <td>Seg123</td>
                </tr>
                <tr>
                <td>Geriatria</td>
                <td>Ter45</td>
                </tr>
            </table>

        </div>

        <div class="col">
        <h3>2° semestre</h3>
        <table>
            <tr>
            <th>Curso</th>
            <th>Horário</th>
            </tr>
            <tr>
            <td>Neurologia</td>
            <td>Sex123</td>
            </tr>
            <tr>
            <td>Psiquiatria</td>
            <td>Qua45</td>
            </tr>
        </table>

    </div>
</div>

        <h2 id="enfermagem" class="cursos">Enfermagem</h2>
        <Button/>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Descrição do curso
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    O Curso de Graduação em Enfermagem da UFFS propicia condições para o desenvolvimento de competências e habilidades gerais e específicas que permitam ao educando atuar nos diferentes cenários da prática profissional do enfermeiro, considerando os princípios e as diretrizes das políticas públicas de educação, saúde e meio ambiente.
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">

        <h3>1° semestre</h3>
            <table>
                <tr>
                <th>Curso</th>
                <th>Horário</th>
                </tr>
                <tr>
                <td>Suturas</td>
                <td>Seg123</td>
                </tr>
                <tr>
                <td>Primeiros socorros</td>
                <td>Ter45</td>
                </tr>
            </table>
        </div>

            <div class="col">

        <h3>2° semestre</h3>
        <table>
            <tr>
            <th>Curso</th>
            <th>Horário</th>
            </tr>
            <tr>
            <td>Anatomia</td>
            <td>Sex123</td>
            </tr>
            <tr>
            <td>Ética</td>
            <td>Qua45</td>
            </tr>
        </table>
    </div>
</div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        
    </div>
    </div>
    </div>
        </div>
    );
}

export default Cursos;
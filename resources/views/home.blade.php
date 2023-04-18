@extends('layout')
@section('title', 'Passagens')
@section('conteudo')


    <div class="container">
        <div class="card custom-bg w-75 p-4 d-flex">

            <form id="flight-form" onsubmit="return validateForm()">
                <div class="row">
                    <div class="form-group col-md align-items-start flex-column">
                        <label for="origin" class="d-inline-flex"> De </label>
                        <input type="text" placeholder="Cidade" class="form-control" id="origin" name="origin"
                            required>
                    </div>
                    <div class="form-group col-md align-items-start flex-column">
                        <label for="partida" class="d-inline-flex"> Para </label>
                        <input type="text" placeholder="Cidade" class="form-control" id="partida" name="partida"
                            required>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md align-items-start flex-column">
                        <label for="data-partida" class=" d-inline-flex">Partida </label>
                        <input type="date" class="form-control" id="data-partida" name="data-partida"
                            onkeydown="return false" required>
                    </div>
                    <div class="form-group col-md align-items-start flex-column">
                        <label for="data-retorno" class="d-inline-flex">Retorno</label>
                        <input type="date" placeholder="One way" value=""
                            onChange="this.setAttribute('value', this.value)" class="form-control" id="data-retorno"
                            name="data-retorno">
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-lg-3 align-items-start flex-column">
                        <label for="adultos" class="d-inline-flex col-auto"> Adultos <span class="sublabel"> 12+
                            </span></label>
                        <select class="form-select" id="adultos"
                            onchange="javascript: dynamicDropDown(this.options[this.selectedIndex].value);">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                    <div class="form-group col-lg-3 align-items-start flex-column">
                        <label for="criancas" class="d-inline-flex col-auto">Crianças <span class="sublabel"> 2-11
                            </span></label>
                        <select class="form-select" id="criancas">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div class="form-group col-lg-3 align-items-start flex-column">
                        <label for="bebes" class="d-inline-flex col-auto">bebês <span class="sublabel">-2</span></label>
                        <select class="form-select" id="bebes">
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-lg-6 align-items-start flex-column">
                        <label for="cabine" class="d-inline-flex">Cabine</label>
                        <select class="form-select" id="cabine">
                            <option value="economica">Económica</option>
                            <option value="economica_premium">Económica Premium </option>
                            <option value="executiva">Executiva</option>
                            <option value="Primeira">Primeira</option>
                        </select>
                    </div>
                    <div class="form-group col-lg-6 align-items-start flex-column pt-lg-4">
                        <div class="form-check form-switch">
                            <input class="form-check-input align-self-center" type="checkbox" id="directFlights">
                            <label class="form-check-label d-inline-flex align-self-center" for="directFlights">Voos
                                Direto</label>
                        </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="text-left col-auto">
                        <button type="submit" class="btn btn-primary"> Pesquisar voos</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <script>
        function dynamicDropDown(listIndex) {

            document.getElementById("bebes").length = 0;
            document.getElementById("criancas").length = 0;

            for (let i = 0; i < Number(listIndex) + 1; i++) {
                document.getElementById("bebes").options[i] = new Option(i.toString(), i);
            }

            for (let i = 0; i < 9 - Number(listIndex) + 1; i++) {
                document.getElementById("criancas").options[i] = new Option(i.toString(), i);
            }
        }
    </script>

@endsection

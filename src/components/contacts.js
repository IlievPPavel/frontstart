import PropTypes from 'prop-types'
import fakemap from '../images/fakemap.JPG';
import Students from "../images/shokolad.jpg";




const Contacts = ({ title }) => {
    return(
        <div class='header'>
            <img class='map' src={fakemap} alt='university picture' height="550" width="100%"/>
            <br />
            <br />

            <h1 className="t-cent">Контакти</h1>
            <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-6 talign">

                    <p>Пощенски адрес: <br />
                        България, гр.Варна 9002, ул. „Васил Друмев“ № 73</p>
                    <p>Телефони</p>
                    <ul>
                    <li>централа: 052 632 015, 052 552 222
                    </li>
                    <li>факс: 052/ 303 163;</li>
                    <li>канцелария на „Учебен отдел“: 052 552 380;</li>
                    <li>канцелария на факултет „Инженерен“ 052 552 379;</li>
                    <li>канцелария на факултет „Навигационен“: 052 552 378;</li>
                    </ul>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-6 talign">
                    <p>Банкова сметка на ВВМУ „Н. Й. Вапцаров“:</p>
                    <p>Банка: Банка ДСК</p>
                    <p><strong>IBAN:</strong> BG0000000000000</p>
                    <p><strong>SWIFT/BIC:</strong> 0000000</p>

                </div>

            </div>

        </div>


    )
}


export default Contacts
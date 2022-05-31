import PropTypes from 'prop-types'
import {Container} from "react-bootstrap";
import Students from '../images/shokolad.jpg';


const Section2 = () => {
    return(
        <div className="sect2 t-cent">
            <h4 className="center">Секция Номер 2 - по-добра от секция номер 1</h4>
            <br />
            <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-6 talign">

            <p>Добре дошли в сайта на университета - Университет!</p>
            <p>Историята на нашия университет е прекалено дълга и велика за да бъде изписана на една страница от сайта. Заради това ще Ви спестим каквито и да е било описания.</p>
            <p>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-6">
                    <img src={Students} alt='university picture' height="250" width="500"/>
                </div>

                </div>
        </div>
    )
}

// Default Props
// Header.defaultProps = {
//     title: 'Test na header',
// }
//
// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }

// const headingStyle = {
//     color: 'black',
// }


export default Section2
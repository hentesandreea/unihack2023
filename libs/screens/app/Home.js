import {Text} from "react-native";
import KContainer from "../../ui-components/KContainer";
import KMotivationalQuotes from "../../ui-components/KMotivationalQuotes";

function Home(props) {
    return (
        <KContainer>
            <KMotivationalQuotes title={'Motivation'} description={'Someday all your dreams will come true.'}/>
        </KContainer>
    );
}

export default Home;
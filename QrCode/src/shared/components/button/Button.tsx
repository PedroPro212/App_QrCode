import { TouchableOpacityProps } from "react-native";
import { Container, TextButtomCustom, ButtonC } from "./button.style";

type ButtonFast = TouchableOpacityProps;

const ButtonCustom = ({...props}: ButtonFast) => {
    return (
        <Container>
            <ButtonC {...props}>
                <TextButtomCustom>Gerar QR Code</TextButtomCustom>
            </ButtonC>
        </Container>
    )
}

export default ButtonCustom;
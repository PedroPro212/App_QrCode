import { TextInputProps } from "react-native";
import { Container, InputComponent } from "./input.style";

type InputFast = TextInputProps;

const Input = ({...props}: InputFast) => {
    return (
        <Container>
            <InputComponent {...props} />
        </Container>
    )
}

export default Input;
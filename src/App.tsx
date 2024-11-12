import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { MiPrimerComponent } from "./components/MiPrimerComponente/MiPrimerComponent"

export const App = () => {
    return (
        <>
            <MiPrimerComponent text={"Texto de prueba"} color={"red"} fontSize={5} />
            <ComponentCounter />
        </>
    )
}

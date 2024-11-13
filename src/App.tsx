import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { MiPrimerComponent } from "./components/MiPrimerComponente/MiPrimerComponent"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./components/FormComponent/FormComponent"

export const App = () => {

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            {/* <MiPrimerComponent text={"Texto de prueba"} color={"red"} fontSize={5} />
            <ComponentCounter />
            <ComponentUseEffect /> */}
            <FormComponent />
        </div>
    )
}

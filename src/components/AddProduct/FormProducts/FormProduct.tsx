import { Form } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm"

export const FormProduct = () => {

    const { handleChange, values, resetForms } = useForm({ nombre: '', imagen: '', precio: 0 })

    const handleSubmitForm = () => {

    }

    return (
        <Form className="p-4 border rounden m-3">

            <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="nombre" placeholder="Ingrese nombre del producto" value={values.nombre} onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId="formImagen">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="text" name="imagen" placeholder="Ingrese imagen del producto" value={values.imagen} onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId="formPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" name="precio" placeholder="Ingrese precio del producto" value={values.precio} onChange={handleChange}></Form.Control>
            </Form.Group>
        </Form>
    )
}

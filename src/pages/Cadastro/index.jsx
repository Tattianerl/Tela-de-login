import { useRef } from "react"
import { Link } from "react-router-dom"
import api from '../../services/api'

function Cadastro() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

   async function handleSubmit(event) {
        event.preventDefault()

    try {
    await api.post('/cadastro', {
        name:nameRef.current.value,
        email:emailRef.current.value,
        password:passwordRef.current.value
    })
    alert("Usuário cadastrado com sucesso")
    
    }catch(error)
    {
        alert(error,"Error ao cadastrar")
    }
}     

   return(

    <div className="max-w-md mx-auto mt-10 bg-white p-9 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>

        <form className="flex flex-col" onSubmit={handleSubmit}>
            <input ref={nameRef} placeholder="Nome" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />

            <input ref={emailRef} placeholder="Email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none my-2" />

            <input ref={passwordRef} placeholder="Senha" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />

            <button className="w-full mt-2 bg-blue-500 py-2 px-3 text-white rounded-md hover:bg-blue-400">Cadastre-se</button>
        </form>
        <Link to="/login" className="text-blue-700 hover:underline mt-4 block text-center">Já tem uma conta? Faça login</Link>
    </div>

   )
}
export default Cadastro
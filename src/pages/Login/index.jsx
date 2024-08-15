import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from '../../services/api'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

   async function handleSubmit(event) {
        event.preventDefault()

    try {
    const { data:token } =  await api.post('/login', {
        email:emailRef.current.value,
        password:passwordRef.current.value
    })

    localStorage.setItem('token', token)
    console.log(token)
   navigate('/listar-usuarios')
    
    }catch(error)
    {
        alert(error,"Senha ou e-mail inválidos")
    }
}     

   return(

    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

        <form className="flex flex-col" onSubmit={handleSubmit}>
           
            <input ref={emailRef} placeholder="Email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none my-2" />

            <input ref={passwordRef} placeholder="Senha" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />

            <button className="w-full mt-2 bg-blue-500 py-2 px-3 text-white rounded-md hover:bg-blue-400">Login</button>
        </form>
        <Link to="/" className="text-blue-700 hover:underline mt-4 block text-center">Não tem uma conta? Cadastra-se</Link>
    </div>

   )
}
export default Login
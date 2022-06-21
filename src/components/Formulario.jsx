//rfce
//rafce
import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect (()  => {
    if (Object.keys(paciente).length > 0) {
      setMascota(paciente.mascota);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    };
  }, [paciente]);

  const generarId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

  const handleSubmit = e => {
    e.preventDefault();
    //validar form

    if ([mascota, propietario, email, alta, sintomas].includes('')) {
      setError(true);
    } else {
      setError(false);
      const Objpaciente = {
        mascota,
        propietario,
        email,
        alta,
        sintomas,
      };

      if (paciente.id) {
        Objpaciente.id = paciente.id;
        const pacientesActualizados = pacientes.map( element => {
          if (element.id === Objpaciente.id) {
            return Objpaciente;
          } else{
            return element;
          };
        });
        setPacientes(pacientesActualizados);
        setPaciente({});
      } else{
        Objpaciente.id = generarId();
        setPacientes([ Objpaciente, ...pacientes]);
      };
      
      setMascota('');
      setPropietario('');
      setEmail('');
      setAlta('');
      setSintomas('');
    };

  }; 

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center uppercase'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y <span className='text-indigo-600 font-bold'>administralos</span></p>
      <form className='bg-white shadow-md rounded-lg py-10 px-5  mb-10'
      onSubmit={ handleSubmit }
      >
        { error && <Error>Todos los campos son obligatorios</Error> }
        <div className='mb-5'>
          <label htmlFor='mascota' className='block uppercase font-bold text-gray-700'>Nombre mascota</label>
          <input id='mascota' type="text" placeholder='Nombre de la mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={mascota} 
          onChange={ e => setMascota(e.target.value) } />
        </div>
        <div className='mb-5'>
          <label htmlFor='propietario' className='block uppercase font-bold text-gray-700'>Nombre propietario</label>
          <input id='propietario' type="text" placeholder='Nombre del propietario' className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
          value={propietario} 
          onChange={ e => setPropietario(e.target.value) } />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='block uppercase font-bold text-gray-700'>email</label>
          <input id='email' type="email" placeholder='Email propietario' className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
          value={email} 
          onChange={ e => setEmail(e.target.value) } />
        </div>
        <div className='mb-5'>
          <label htmlFor='alta' className='block uppercase font-bold text-gray-700'>Alta</label>
          <input id='alta' type="date" className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
          value={alta} 
          onChange={ e => setAlta(e.target.value) } />
        </div>
        <div className='mb-5'>
          <label htmlFor='sintomas' className='block uppercase font-bold text-gray-700'>Sintomas</label>
          <textarea id="sintomas"  placeholder='Describe los sintomas' className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' 
          value={sintomas} 
          onChange={ e => setSintomas(e.target.value) } />
        </div>
        <input type="submit" value={paciente.id ? 'Guardar cambios' : 'Agregar Paciente'} className=' bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition-all'/>
      </form>
    </div>
  );
};

export default Formulario
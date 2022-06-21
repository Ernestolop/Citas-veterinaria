import Paciente from './Paciente.jsx';

const ListadoPacientes = ({pacientes,setPacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>
        <h2 className='font-black text-3xl text-center'>{ pacientes.length === 0 ? 'Aun no hay pacientes' : 'Listado de pacientes'}</h2>
        <p className=' text-lg mt-5 mb-10 text-center'>Administra tus <span className=' text-indigo-600 font-bold'>pacientes y citas</span></p>
        { pacientes.map( paciente => {
          return (
            <Paciente 
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
          );
        })}
        
    </div>
  )
}

export default ListadoPacientes;
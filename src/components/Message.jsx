export const Message = ({ lastRegister }) => {
  return (
    <>
      <p>Tu ultimo registro de asistencia:</p>
      <p>{new Date(lastRegister).toLocaleString()}</p>
    </>
  );
};

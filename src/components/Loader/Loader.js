// Utils
import { Rings } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Rings
      height="200"
      width="200"
      color="#fb6d3a"
      radius="6"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: ' 50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
};

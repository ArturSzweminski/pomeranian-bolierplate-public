import { Header } from '../header';
import { Input } from '../input';
import { Label } from '../label';

export const CheckBoxOption = ({
  constants,
  name,
  headerText = '',
  labelText,
  register,
  error,
}) => {
  return (
    <>
      <Header children={headerText} />
      <Label children={labelText} value={'name'} />

      {constants.map((option, index) => (
        <Input
          key={index}
          type="checkbox"
          name={name}
          value={option.value}
          text={option.text}
          register={register}
        />
      ))}

      {error && <p>{error.message}</p>}
    </>
  );
};

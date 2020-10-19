import React, {
  ComponentType,
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { Container } from './styles';

interface IProps extends InputHTMLAttributes<HTMLElement> {
  icon: ComponentType<IconBaseProps>;
  isPassword?: boolean;
}

const Input: React.FC<IProps> = ({
  icon: Icon,
  isPassword = false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={16} />}
      <input
        ref={inputRef}
        {...rest}
        type={showPassword ? 'text' : rest.type}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      {isPassword &&
        (showPassword ? (
          <FaEye
            onClick={() => setShowPassword(!showPassword)}
            size={16}
            color="#00e676"
            className="icon-click"
          />
        ) : (
            <FaEyeSlash
              onClick={() => setShowPassword(!showPassword)}
              size={16}
              color="#00e676"
              className="icon-click"
            />
          ))}
    </Container>
  );
};

export default Input;

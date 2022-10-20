import { Button } from '@mui/material';

export const ButtonCommonForm = ({
  variant,
  //color = "secondary",
  color,
  label,
  type,
  onClick
}) => {
  return (
    <Button
      color={color}
      type={type}
      variant={variant}
      sx={{
        fontWeight: 'bold'
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

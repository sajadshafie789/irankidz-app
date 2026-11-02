export type StarRatingProps = {
  rating: number;
  onChange: (value: number) => void;
  size?: number;
  color?: string;
  disabled?: boolean;
};

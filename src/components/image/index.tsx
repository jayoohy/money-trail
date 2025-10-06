import {
  LazyLoadImage,
  type LazyLoadImageProps,
} from "react-lazy-load-image-component";
import placeholder from "@/assets/placeholder.png";
import { cn } from "@/lib/utils";

interface EnhancedImageProps extends LazyLoadImageProps {
  isZoomed?: boolean;
}

const Image = ({ isZoomed = false, ...props }: EnhancedImageProps) => {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-lg relative w-full",
        isZoomed && "group"
      )}
    >
      <LazyLoadImage
        placeholderSrc={placeholder}
        {...props}
        className={cn(
          props.className,
          isZoomed && "transition-transform duration-300 group-hover:scale-110"
        )}
        wrapperClassName={cn(
          props.wrapperClassName,
          "w-full h-auto overflow-hidden max-w-full !bg-cover bg-center"
        )}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.style.display = "none";
        }}
      />
    </figure>
  );
};

export default Image;

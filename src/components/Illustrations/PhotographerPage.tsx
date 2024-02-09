import React, { forwardRef } from 'react'
interface Props extends React.SVGAttributes<SVGSVGElement> {}
const defaultProps = {
  fill: 'currentColor',
  width: '154',
  height: '142',
}
function PhotographerPage(props: Props, ref?: React.LegacyRef<SVGSVGElement>) {
  const {
    width = defaultProps.width,
    height = defaultProps.height,
    fill = defaultProps.fill,
    ...other
  } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 154 142"
      {...other}
      ref={ref}
    >
      <rect
        width="154"
        height="142"
        fill={fill}
        fillOpacity="0.25"
        rx="6"
      ></rect>
      <path
        fill={fill}
        d="M33.452 16.73c-1.92.584-2.094.764-2.094 2.111 0 .809.262 1.887.611 2.381.567.809.567.988-.218 1.707-.698.584-.83 1.078-.611 2.201.436 2.022.61 2.201 1.92 1.932.96-.18.872-.135-.306.45-1.352.583-1.44.763-1.309 2.56.131 1.662.262 1.886 1.135 1.841 1.003-.044 1.003 0-.175.944-1.92 1.572-1.614 5.12.35 4.447.61-.18.785-.09.61.225-.174.27-.567.494-.916.494-1.178 0-1.57 3.863-.436 4.357.61.225.61.315.043.989-.349.404-.698 1.437-.785 2.29-.087 1.258.043 1.663.829 2.067l1.003.494-1.09.944c-1.266 1.123-1.353 3.503-.219 4.267.655.404.611.584-.087 2.111-.654 1.348-.742 2.022-.393 3.19l.393 1.527.044-1.886c.043-1.663.349-2.202 3.447-5.57 8.202-9.03 19.415-15.32 30.846-17.296 4.974-.853 5.585-1.123 1.963-.808-3.49.314-9.118 1.392-11.998 2.29-7.024 2.292-15.576 7.547-20.899 12.893-3.141 3.19-3.316 3.28-3.316 2.067 0-2.336 7.025-8.221 14.355-11.905 7.33-3.728 13.612-5.48 21.858-6.064l4.582-.315-5.018-.044c-12.565-.18-24.084 3.997-33.726 12.173l-2.094 1.797.13-1.482c.088-1.258.568-1.797 2.968-3.504C41 38.158 49.203 34.744 56.926 33.35c5.41-.988 13.83-.898 18.455.135 4.363 1.033 4.189.494-.174-.63-10.123-2.56-23.473-1.302-33.16 3.1-3.184 1.438-9.38 5.256-9.38 5.75 0 .18-.175.36-.436.36-.218 0-.437-.584-.437-1.348 0-1.168.35-1.482 2.967-3.01 10.951-6.334 23.997-8.67 36.213-6.468 2.924.539 6.327 1.347 7.548 1.886 1.266.495 2.444.809 2.706.72.741-.225-4.8-2.382-8.857-3.46-11.868-3.145-25.131-1.662-36.257 4.043-1.527.764-2.967 1.572-3.229 1.842-.698.719-1.09.45-1.09-.854 0-1.123.349-1.392 3.097-2.695 7.766-3.684 14.573-5.21 22.862-5.21 10.733 0 20.768 2.919 29.364 8.534 1.221.854 2.268 1.393 2.268 1.303 0-.719-8.464-5.795-12.521-7.547-8.16-3.549-14.137-4.627-22.994-4.223-7.635.36-14.223 2.067-20.244 5.211l-1.833.944V30.43c0-1.572.306-1.797 5.323-3.594 7.505-2.74 16.623-3.683 24.52-2.56 11.17 1.617 22.077 6.738 29.19 13.656 1.352 1.348 2.486 2.246 2.486 2.022 0-.584-4.014-4.403-7.373-7.008-5.89-4.627-10.777-7.143-17.933-9.254-11.518-3.414-23.385-2.606-35.47 2.425-.699.315-.786.135-.655-1.167l.13-1.528 4.756-1.482c11.955-3.684 25.262-2.83 37.13 2.425 6.719 2.965 14.31 8.626 18.804 14.016 3.665 4.403 4.014 4.672 1.964 1.617-2.313-3.504-9.468-10.691-13.09-13.207-3.839-2.65-10.863-6.02-15.532-7.457-3.403-1.033-4.93-1.213-11.824-1.392-8.77-.27-13.22.18-18.499 1.931-1.789.584-3.272.989-3.316.944-.087-.045-.174-.674-.261-1.393-.219-2.021 1.526-2.426 10.689-2.47 4.45-.045 7.722-.225 7.722-.45 0-.719-14.747-.539-17.103.225zm19.634 1.842c-.916.09-2.487.09-3.49 0-1.047-.09-.306-.18 1.614-.18 1.92 0 2.749.09 1.876.18zm3.272 0c-.305.09-.829.09-1.09 0-.306-.135-.088-.225.523-.225.61 0 .829.09.567.225zm-18.237 1.931c-.48.225-1.178.404-1.527.404-.393 0-.35-.18.218-.404.48-.224 1.178-.404 1.527-.404.393 0 .349.18-.218.404zm11.867 2.516c-.13.135-.523.18-.829.045-.349-.135-.218-.27.262-.27.48-.045.742.09.567.225zm-3.665.494c-.305.09-.916.09-1.309 0-.436-.135-.174-.225.524-.225.742 0 1.047.09.785.225zm-8.639 1.932c-.13.224-.523.449-.785.449-.305 0-.262-.18.131-.45.829-.538 1.004-.538.654 0zm9.686 2.066c-.13.135-.523.18-.828.045-.35-.135-.219-.27.261-.27.48-.045.742.09.567.225zm-9.467 2.606c0 .09-.306.314-.698.449-.35.135-.524.09-.393-.18.262-.45 1.09-.629 1.09-.27zm-2.4 1.168c-.13.224-.48.449-.698.449-.262 0-.306-.225-.175-.45.131-.269.48-.449.698-.449.262 0 .306.18.175.45zm1.09 4.222c0 .09-.305.315-.697.45-.35.134-.524.09-.393-.18.262-.45 1.09-.63 1.09-.27zm15.184-19.181c.306.134.698.09.83-.045.174-.135-.088-.27-.568-.225-.48 0-.61.135-.262.27z"
      ></path>
      <path
        fill={fill}
        d="M54.046 16.46c0 .27 2.007.45 5.192.45 4.712 0 5.585.134 9.075 1.392 2.094.764 4.843 1.932 6.02 2.56 8.901 4.583 17.846 13.208 22.82 21.923 2.4 4.222 2.094 4.672-.873 1.347-1.484-1.752-2.705-3.369-2.618-3.593.087-.27 0-.36-.174-.18-.175.18-.524.18-.786-.045-.261-.225-1.745-1.168-3.272-2.022-2.705-1.617-4.363-2.2-8.333-2.965-2.618-.539-9.904-.539-10.21-.044-.174.224-1.09.539-2.138.718-1.003.18-2.792.809-3.926 1.438-1.135.584-2.27.943-2.487.808-.611-.359-7.898 3.504-11.737 6.2-4.014 2.83-10.078 8.94-12.784 12.892-2.923 4.223-5.235 8.805-5.104 9.973.087.584 0 1.303-.175 1.572-.218.315-.262.584-.13.584.13 0-.088.854-.437 1.887-.567 1.572-.698 4.852-.742 18.014-.13 18.822-.087 18.957 3.185 18.957 1.79 0 1.964-.09 1.92-1.078l-.044-1.078.83 1.212c1.046 1.438 3.533 1.663 4.231.36.437-.719.524-.719 1.091 0 .96 1.303 4.189.943 4.189-.449 0-.584.174-.495.698.269.698 1.033 2.487 1.303 3.621.584.524-.359.567-.674.131-1.707l-.524-1.258 1.091 1.348c.611.719 1.09 1.482 1.09 1.662 0 .539 2.837.404 3.36-.135.262-.269.393-.808.219-1.213-.131-.359.349-.089 1.047.629 1.483 1.528 3.621 1.617 3.97.135.218-.809.262-.809 1.309.045 1.876 1.482 4.363 1.168 4.101-.584-.087-.629.698-.314 1.484.584.829.943 4.45 1.348 3.926.449-.13-.269-.872-.449-1.57-.449-1.091 0-2.05-.764-5.367-4.223-7.504-7.771-12.478-17.07-14.878-27.851-1.178-5.211-1.396-4.493-.436 1.347 1.702 9.973 6.588 20.035 13.35 27.358 1.659 1.797 3.011 3.369 3.011 3.459 0 .135-.654.135-1.396-.045-1.178-.225-2.094-1.168-4.843-4.762-6.85-9.074-10.602-19.361-11.65-32.164-.348-4.492-.392-4.402-.217 2.066.218 7.817 1.134 13.073 3.36 18.733 1.875 4.807 4.755 9.973 7.46 13.432l2.094 2.695-1.396-.135c-1.221-.135-1.745-.584-3.36-3.055-3.752-5.794-6.762-13.162-8.202-20.304-.785-3.954-1.09-14.51-.523-19.452l.305-2.695-.654 2.47c-1.091 3.999-1.31 15.993-.437 20.89 1.396 7.547 3.36 12.937 6.85 18.732l2.094 3.504h-1.265c-1.221 0-1.44-.314-3.883-5.525-4.407-9.39-6.283-19.721-5.323-29.739.524-5.3 1.789-11.275 3.141-14.51.48-1.078.83-2.2.83-2.47-.044-.944-2.575 5.48-3.665 9.254-2.88 9.927-2.75 22.28.305 31.535 1.483 4.447 3.316 8.76 4.32 10.197l.828 1.258h-2.923l-2.05-5.346c-2.793-7.412-3.796-12.802-3.796-20.574 0-3.414.218-7.457.436-8.984 1.047-6.604 5.236-18.329 6.544-18.329.35 0 .655-.404.655-.898 0-.943 1.92-4.447 2.269-4.088.13.09-.044.629-.306 1.168-1.047 1.977-2.225 6.11-2.487 8.535-.305 3.055-.305 3.594.088 6.963.174 1.483.305 3.145.349 3.684.043.494.218.853.436.718.175-.09.305.135.305.54 0 .359.306 1.437.742 2.38.393.899.655 1.797.655 1.977-.044.225.087.36.305.36s.48.359.654.763c.131.45.393 1.078.524 1.438.174.404.087.494-.218.27-1.309-.81 3.447 8.31 6.5 12.577 4.19 5.75 11.083 11.815 16.973 14.869 1.832.989 3.447 1.932 3.621 2.202.175.269.35.089.35-.36 0-.404-.219-.763-.524-.763-.262 0-.393-.09-.306-.225.131-.09 1.527.314 3.142.898 2.443.944 3.708 1.123 7.199 1.079 4.755-.09 3.708-.719-1.31-.809-3.533-.045-7.765-1.617-13.612-5.031-8.377-4.897-16.536-13.387-20.375-21.159-1.484-3.054-1.57-3.459-.393-2.38.48.449.742 1.033.567 1.302-.13.27-.13.36.044.18.174-.135 1.134.629 2.138 1.752.96 1.078 2.618 2.515 3.665 3.144 1.047.63 1.789 1.303 1.658 1.483-.35.539 5.453 4.672 9.424 6.738 8.072 4.223 18.586 6.694 26.134 6.11 8.77-.63 15.271-2.471 22.819-6.47.175-.09.305.495.305 1.348 0 1.483-.043 1.528-3.795 2.965-6.327 2.471-10.21 3.28-17.191 3.549-9.555.36-15.838-.764-23.778-4.312-6.021-2.696-10.515-5.616-15.227-9.883-1.178-1.078-.611-.36 1.352 1.572 13.788 13.881 34.468 18.643 52.967 12.129 2.269-.809 4.494-1.617 4.931-1.797.611-.314.741-.135.741 1.168v1.527l-3.795 1.213c-14.267 4.358-28.97 3.235-41.362-3.144-4.843-2.516-10.602-6.918-14.66-11.186-2.05-2.201-3.97-4.402-4.232-4.896-.262-.494-.567-.809-.698-.674-.392.45 4.45 6.514 7.985 10.018 5.933 5.84 13.612 10.376 21.335 12.712 4.32 1.258 9.118 1.932 8.682 1.213-.218-.359 1.833-.494 6.501-.539 4.974-.045 6.675.09 6.457.494-.436.719 3.84.135 7.81-1.033 5.148-1.527 4.974-1.527 5.236-.09.131.719 0 1.393-.262 1.573-.305.179-2.792.359-5.541.404-2.749.045-5.585.225-6.326.404-.786.225 1.352.36 5.322.315 7.548-.09 8.159-.315 7.461-2.92-.218-.854-.785-1.662-1.352-1.887-.742-.314-.786-.404-.219-.404 2.007-.09 3.273-3.28 1.877-4.672-.568-.63-.568-.854 0-1.977.349-.674.654-1.617.654-2.021 0-.989-1.265-2.246-1.876-1.842-.305.135 0-.27.698-.898.916-.899 1.134-1.483 1.004-2.381-.306-1.528-1.048-2.067-2.182-1.438-.524.27-.175-.225.742-1.123 1.745-1.707 1.832-1.932 1.178-3.683-.349-.899-.655-1.124-1.222-.944-.436.18-.262-.18.48-.853.96-.944 1.178-1.483 1.004-2.561-.306-1.887-.917-2.47-1.877-1.662-.436.36-.218-.045.437-.854 1.527-1.931 1.701-5.03.305-5.03-.48 0-.872-.226-.872-.45 0-.27.174-.45.436-.45 1.352 0 2.05-4.626.872-5.84-.785-.808-.785-.898.044-2.65 1.047-2.29.742-5.884-.567-6.244-.567-.134-.742-.449-.567-.943.174-.404.654-2.156 1.09-3.863.742-2.786.829-4.627.699-16.172-.088-12.983-.393-16.082-1.789-17.655-.786-.898-2.007-.943-3.403-.224-1.135.584-1.353.584-2.051-.09-1.091-1.033-3.141-.719-3.752.539l-.48 1.033-.48-1.123c-.349-.764-.873-1.123-1.571-1.123-1.527 0-2.443.45-2.443 1.213 0 .494-.262.45-1.135-.27-1.439-1.168-2.53-1.213-3.621-.09-.785.81-.829.81-1.527 0-.96-1.167-3.054-1.123-3.578.09l-.392.899-1.047-.899c-1.31-1.168-3.404-1.123-3.796.045-.218.809-.306.809-1.658-.09-1.527-.943-3.316-1.212-3.316-.449 0 .225.436.45 1.003.45 2.007 0 8.116 7.95 11.213 14.6 4.058 8.714 5.803 16.036 5.803 24.482.044 4.088.131 4.806.437 3.369.523-2.47.087-12.219-.786-16.756-1.527-8.266-6.675-19.182-11.475-24.483l-1.134-1.212h1.396c1.222 0 1.615.359 3.97 4.043 8.29 12.982 11.17 29.558 7.636 43.798-.175.764-.131.809.218.18.96-1.527 1.876-7.547 2.094-13.432.262-6.828-.523-13.431-2.269-19.091-1.396-4.627-5.89-13.522-7.198-14.376-.83-.538-.437-1.122.785-1.122 1.09 0 1.44.404 2.879 3.01 7.854 14.599 9.25 32.837 3.534 47.706-.567 1.618-1.003 2.965-.916 3.055.306.315 2.793-6.289 3.927-10.332 3.665-12.938 2.225-28.166-3.752-39.98-.786-1.528-1.484-2.92-1.571-3.145-.087-.18.436-.314 1.134-.314 1.178 0 1.397.269 2.618 3.234 5.803 13.97 6.501 27.852 2.051 41.553-1.527 4.627-3.621 9.299-5.628 12.488l-1.135 1.797 1.265-1.483c2.924-3.503 7.287-13.027 8.945-19.72 2.661-10.602 1.439-24.213-3.054-34.23-.829-1.843-1.484-3.415-1.484-3.505 0-.09.611-.134 1.353-.045 1.221.135 1.483.45 2.399 2.83 2.356 5.93 3.273 10.782 3.534 18.418.262 8.311-.349 13.163-2.574 19.766-2.487 7.547-5.934 13.791-10.951 19.766l-2.661 3.144 2.53-2.47c5.585-5.48 10.864-14.15 13.307-21.832 3.534-11.141 3.447-24.258-.218-34.995-.611-1.752-1.178-3.504-1.352-3.953-.175-.629.043-.763 1.134-.763 1.265 0 1.353.09 2.443 3.773 2.356 7.996 3.098 17.43 1.964 25.201-.655 4.402-2.662 11.5-4.407 15.453-2.531 5.706-7.417 12.623-12.478 17.565-3.883 3.818-4.276 4.312-2.313 2.92 3.36-2.426 10.297-9.793 12.74-13.522 3.884-6.02 6.545-12.263 8.159-19.406.786-3.37.96-5.57.96-11.276 0-7.232-.698-12.128-2.487-17.744-.785-2.38-.436-3.1 1.309-2.875.655.09 1.047.854 1.658 3.28.655 2.65.785 5.12.785 15.273 0 13.567-.218 15.004-3.272 22.192-3.01 7.007-7.897 14.285-12.74 18.957-3.141 3.01-8.42 6.963-11.213 8.31-2.967 1.438-3.01 1.932-.043.584 7.853-3.594 15.619-10.287 20.986-18.193 2.836-4.223 5.41-9.21 5.41-10.647 0-.404.218-.763.436-.763.262 0 .436.988.436 2.156 0 1.752-.349 2.74-1.919 5.346-4.102 6.873-9.861 13.117-16.187 17.61-4.189 2.964-7.766 4.806-12.784 6.603-5.017 1.797-4.537 2.021.742.359 4.45-1.393 10.907-4.447 13.874-6.514 6.196-4.357 12.915-11.185 15.096-15.453l.96-1.797.131 1.707c.175 1.977-.262 2.606-5.672 8.266-7.33 7.726-16.492 12.758-28.054 15.408-3.927.899-3.927.899-1.09.63 11.212-1.034 22.818-6.65 31.195-15.095 1.92-1.931 3.534-3.504 3.578-3.504.087 0 .13.584.13 1.303 0 1.033-.523 1.752-2.487 3.504-11.169 9.883-22.774 14.51-36.78 14.6-5.366.045-5.628.09-3.054.449 3.752.539 12.478.135 16.58-.764 8.9-1.931 19.72-7.367 23.953-12.084 1.352-1.482 1.788-1.482 1.788.045 0 1.483-2.705 3.684-8.638 6.963-10.864 6.11-21.423 8.041-34.774 6.424-1.527-.18-1.44-.09.655.494 1.789.54 4.537.764 10.69.809 9.292.044 12.39-.494 19.633-3.504 3.97-1.662 10.253-5.211 11.126-6.334.828-1.034 1.308-.809 1.308.539 0 1.078-.48 1.527-3.621 3.369-6.893 4.043-13.002 5.974-21.64 6.918-5.629.629-6.807.629-11.824 0-3.49-.45-6.981-1.213-9.424-2.066-5.192-1.842-5.89-2.022-4.45-1.124 2.137 1.258 10.296 3.864 14.223 4.493 4.974.853 12.434.853 17.321-.045 5.061-.899 11.824-3.235 15.881-5.57 1.789-.989 3.273-1.797 3.36-1.797.087 0 .174.584.174 1.302 0 1.123-.305 1.393-2.923 2.65-8.857 4.133-13.569 5.212-23.473 5.212-8.42.044-10.253-.225-17.234-2.516-5.148-1.707-11.038-4.672-10.646-5.39.175-.315.131-.36-.174-.18-.48.314-4.189-1.932-3.84-2.291.088-.09.96.224 1.877.673 4.144 2.202 9.904 3.055 15.183 2.291 1.92-.314 4.058-.539 4.712-.539.698 0 1.003-.134.742-.314-.306-.18.305-.584 1.483-.943 1.09-.315 2.007-.764 2.007-.989 0-.18.218-.224.524-.045.305.225.349.135.13-.27-.261-.448-.13-.538.568-.358.523.18.872.134.741-.045-.087-.18.786-1.124 1.964-2.022 2.967-2.336 5.41-5.48 7.461-9.478.916-1.842 1.788-3.37 1.963-3.325.131 0 .393-.135.523-.314.175-.18.044-.18-.261 0-.568.36-.48-.719.392-3.504.48-1.662.524-2.516 0-2.516-.218 0-.48.674-.61 1.438-.655 4.582-2.138 7.951-5.585 12.758-2.269 3.144-6.894 6.783-10.428 8.175-2.225.854-5.366 1.797-6.108 1.797-6.5.18-8.028.09-10.297-.584-2.269-.674-3.403-1.123-7.548-3.1-1.527-.718-7.591-6.962-8.333-8.58-.35-.763-.96-1.841-1.353-2.47-1.745-2.785-3.054-9.344-2.705-13.926.306-4.357.873-6.603 2.793-10.557 4.057-8.535 12.914-14.42 21.99-14.69 4.275-.134 7.635.136 7.635.63 0 .18.523.36 1.134.36 1.309 0 5.41 1.751 5.41 2.29 0 .225.13.36.35.315.566-.18 2.442 1.078 3.926 2.605.785.854 1.57 1.527 1.745 1.572.174 0 1.178 1.258 2.269 2.786 3.272 4.582 4.712 8.445 5.105 13.566.349 5.031 1.09 6.424.829 1.572-.262-4.312-1.92-10.736-3.273-12.623-1.003-1.392-1.178-1.976-.48-1.527.655.404-1.483-4.447-3.534-7.951C92.222 32.9 86.77 26.882 80.53 22.39c-3.664-2.65-7.678-4.717-8.638-4.447-.48.134-.742.045-.611-.135.13-.18-.175-.27-.611-.135-.48.135-2.05-.18-3.49-.719-2.138-.763-3.709-.943-7.898-.943-3.184 0-5.235.18-5.235.45zm53.534 5.93c-.131.36-.262.225-.262-.27-.043-.494.088-.763.219-.584.13.135.174.54.043.854zm10.908 7.188c-.131.359-.262.224-.262-.27-.044-.494.087-.764.218-.584.131.135.175.539.044.854zm.436 4.94c-.131.315-.218.09-.218-.538 0-.63.087-.854.218-.584.087.314.087.853 0 1.123zm-58.16 5.347c-2.18 1.796-3.053 2.246-3.446 1.841-.218-.18-.218-.045-.043.225.174.36-.437 1.393-1.571 2.65-1.047 1.123-1.876 2.202-1.876 2.336 0 .63-1.571 2.56-1.876 2.381-1.047-.674-7.941 12.309-9.6 18.149-1.875 6.558-2.573 14.78-1.875 21.293.785 6.873 1.701 10.197 5.148 18.328.131.404-.218.584-1.09.584-1.179 0-1.397-.27-2.226-2.381-4.188-10.602-4.755-26.37-1.352-37.15 2.225-7.053 6.937-15.633 10.995-20.036 1.352-1.482 2.05-2.605 1.832-2.92-.218-.359-.13-.404.262-.18.349.225.48.18.262-.134-.131-.27.349-1.033 1.134-1.707 1.44-1.213 1.44-1.213.13-.404-3.751 2.29-10.034 8.49-13.306 13.162-3.404 4.851-6.72 12.219-8.334 18.508-.916 3.414-1.003 4.851-1.047 13.476 0 9.12.044 9.883 1.178 13.926.611 2.336 1.31 4.627 1.44 5.031.262.674.044.809-1.178.809-1.396 0-1.527-.135-2.007-2.022-.35-1.392-.524-6.513-.524-16.126 0-13.881 0-14.151 1.091-17.565 4.232-13.297 13.962-25.336 25.698-31.76 3.796-2.066 4.407-2.156 2.182-.314zm-9.38 7.906c-10.47 11.814-15.27 24.842-14.66 40.025.262 7.368 1.964 15.633 3.666 18.284.872 1.302.698 1.572-.917 1.572h-1.44l-1.134-4.133c-1.745-6.379-2.181-9.523-2.225-15.633-.044-9.164 2.007-18.193 5.977-26.28 2.356-4.896 11.257-16.396 12.61-16.396.218 0-.611 1.168-1.877 2.56zM33.845 82.585c-.13.315-.218.09-.218-.539s.087-.853.218-.584c.087.315.087.854 0 1.123zm3.927 2.696c-.131.36-.262.224-.262-.27-.044-.494.087-.763.218-.584.131.135.175.54.044.854zm0 1.797c-.131.36-.262.224-.262-.27-.044-.494.087-.764.218-.584.131.135.175.54.044.854zm0 2.92c-.131.449-.218.09-.218-.764s.087-1.213.218-.809c.087.45.087 1.168 0 1.573zm78.447-.315c-.131.225-.524.45-.785.45-.306 0-.262-.18.13-.45.829-.539 1.004-.539.655 0zm-82.374 4.582c-.13.36-.262.225-.262-.27-.043-.494.087-.763.218-.583.131.134.175.539.044.853zm83.028.09c0 .09-.305.314-.698.45-.349.134-.523.09-.392-.18.261-.45 1.09-.63 1.09-.27zm-2.836 1.168c-.13.225-.523.45-.785.45-.305 0-.262-.18.131-.45.829-.539 1.003-.539.654 0zm4.145 3.324c0 .09-.392.27-.872.405-.48.134-.786.044-.611-.18.218-.404 1.483-.584 1.483-.225zm-2.399.719c-.131.225-.524.449-.786.449-.305 0-.261-.18.131-.449.829-.539 1.004-.539.655 0zm-2.4.898c-.349.225-.829.45-1.091.45-.218 0-.131-.225.218-.45.349-.224.873-.449 1.091-.449.262 0 .131.225-.218.449zm-68.761 1.168c.13.36.087.54-.175.405a.857.857 0 01-.436-.719c0-.629.305-.494.61.314zm59.293.944c-.305.09-.916.09-1.309 0-.436-.135-.174-.225.524-.225.742 0 1.047.09.785.225zm8.29 3.144c-.305.09-.829.09-1.091 0-.305-.134-.087-.224.524-.224s.829.09.567.224zm-2.88.405c-.131.134-.523.179-.829.045-.349-.135-.218-.27.262-.27.48-.045.742.09.567.225z"
      ></path>
      <path
        fill={fill}
        d="M71.934 16.46c0 .225.742.45 1.658.45 1.876 0 5.672 2.38 10.777 6.738 6.719 5.705 12.958 14.824 15.75 23.045 1.571 4.627 1.92 4.088.393-.674-2.705-8.445-7.591-16.486-13.787-22.64-3.665-3.64-7.679-6.65-7.897-5.93-.087.27-.83.09-1.876-.495-1.789-.988-5.018-1.302-5.018-.494z"
      ></path>
      <path
        fill={fill}
        d="M80.006 16.46c-.175.27.262.45 1.047.45 1.004 0 2.05.718 4.8 3.413 8.595 8.311 14.703 19.901 16.841 31.85.436 2.471.567 2.785.61 1.438.044-2.156-1.003-7.547-2.443-12.174-2.269-7.457-5.585-13.477-10.69-19.451-3.097-3.639-5.497-5.795-5.017-4.493.218.63-.043.54-1.352-.359-1.658-1.168-3.316-1.437-3.796-.674zm2.007 17.7c.087.09.654.404 1.265.673 1.047.495 1.047.495.262-.134-.698-.584-2.138-1.078-1.527-.54zm-21.859 3.414c-8.726 3.054-14.66 6.918-21.379 13.88-5.105 5.256-6.98 7.997-5.977 8.67.305.225.349.36.087.36s-.742.764-1.09 1.662c-1.048 3.055-.786 6.469.566 6.379.393 0 .393-.09 0-.27-.348-.134-.567-1.033-.567-2.246 0-1.617.393-2.605 2.007-5.21 6.981-11.051 17.583-19.676 28.884-23.45 2.181-.764 2.835-1.168 1.745-1.078-.306 0-2.225.584-4.276 1.303zM48.2 60.26c-.132.404-.262.988-.219 1.257 0 .314.218.045.436-.539.219-.584.35-1.168.219-1.258-.088-.09-.262.135-.437.54zm.218 4.986c0 .494.13.629.261.27.131-.315.088-.72-.043-.854-.131-.18-.262.09-.218.584zm2.574 10.422c0 1.437 2.443 7.86 4.668 12.308 2.662 5.301 6.545 10.557 10.602 14.42 3.36 3.235 6.676 5.57 6.894 4.897.087-.27.436-.36.785-.225.306.135.524.359.393.539-.218.404-.044.449 3.228.764 1.659.179 2.226.135 2.051-.225-.174-.269-.96-.494-1.789-.494-2.225 0-7.548-3.908-12.87-9.389-6.065-6.244-9.163-11.05-12.26-18.912-.917-2.336-1.702-3.998-1.702-3.683zM72.72 91.12c.218.225.698.36 1.003.27.35-.135.131-.314-.436-.494-.742-.18-.916-.135-.567.225zm2.181.674c.306.135.698.09.829-.044.175-.135-.087-.27-.567-.225-.48 0-.611.135-.262.27zM37.38 113.043c-.699.718-1.353 1.347-1.44 1.347-.044 0-.262-.494-.393-1.123-.306-1.213-1.484-1.482-2.356-.584-.306.315-.524 1.797-.524 3.594 0 1.662-.175 3.055-.393 3.055-.654 0-.96 1.437-.436 2.066 1.265 1.617 3.883-.135 3.883-2.65.044-1.303.087-1.348.524-.539 1.527 2.74 4.145 3.279 6.283 1.213 1.047-.944 1.308-1.573 1.308-3.01-.043-2.067-.48-2.875-2.007-3.953-1.57-1.123-2.967-.944-4.45.584zm4.667.898c1.135 1.258.699 3.953-.785 5.121-1.134.854-1.309.854-2.4.225-2.268-1.303-2.355-4.942-.13-6.065 1.178-.629 2.356-.359 3.316.719zm-7.547 2.561c-.088 1.931-.219 3.773-.306 4.043-.218.673-1.963.808-1.963.134 0-.269.305-.449.654-.449.524 0 .655-.719.655-3.594 0-2.605.13-3.593.567-3.593.392 0 .523.898.392 3.459z"
      ></path>
      <path
        fill={fill}
        d="M38.863 114.211c-1.047.763-1.31 2.785-.437 3.683.742.764 2.836.674 3.142-.179.48-1.258.262-2.786-.437-3.504-.829-.899-1.047-.899-2.268 0zm1.788 1.482c.262 1.078-.305 2.066-.96 1.662-.523-.359-.654-1.752-.174-2.201.48-.539.916-.359 1.134.539zm4.494-3.279c-.523.494-.698 1.617-.698 3.998 0 2.785.131 3.414.83 3.773.61.36 1.003.27 1.57-.404.742-.854.829-.854 1.614-.135 1.09.988 1.964 1.123 2.313.27.218-.629.349-.629 1.047.045.785.763.872.763 1.745-.135 1.09-1.123 2.05-1.213 2.4-.225.305.854 1.963.674 2.574-.314.305-.539.174-1.303-.524-2.92-1.44-3.235-1.57-3.459-2.356-3.953-1.134-.764-2.05.09-3.098 2.875l-.916 2.47-.218-2.425c-.262-2.83-1.134-3.774-2.661-2.83-.742.494-1.091.494-1.92-.09-.96-.629-1.09-.629-1.702 0zm2.574 2.875c.742 1.213 1.44 2.246 1.571 2.246s.175-1.033.044-2.246c-.131-1.707-.044-2.246.392-2.246.48 0 .568.718.48 3.414-.174 3.908-.567 3.908-2.748-.045l-1.266-2.246v2.785c0 1.572-.174 2.83-.436 2.83s-.436-1.438-.436-3.369c0-4.088.567-4.358 2.4-1.123zm8.072-1.707c0 .314.48 1.752 1.047 3.189 1.004 2.471.785 4.223-.262 1.932-.698-1.617-2.836-1.662-3.228-.045-.131.629-.437 1.123-.655 1.123-.567 0-.48-.629.218-2.336.35-.809.873-2.156 1.135-2.965.523-1.392 1.745-2.021 1.745-.898z"
      ></path>
      <path
        fill={fill}
        d="M54.57 115.289c-.306.853-.262 1.168.218 1.258.916.224 1.09-.09.61-1.303l-.392-1.078-.437 1.123zm5.06-3.28c-1.526.27-1.963 1.483-.828 2.471.654.494.916 1.258.916 2.561 0 2.336 1.44 4.133 2.443 3.099.35-.359.655-1.572.698-2.785 0-1.572.218-2.201.83-2.56.785-.405.828-.225.828 1.976 0 2.606.655 3.639 2.05 3.369.437-.09 1.004-.629 1.31-1.257.349-.719.567-.854.567-.405 0 .405.393 1.078.873 1.528.741.673.96.718 1.57.179.567-.449.83-.449 1.57 0 .743.494 1.048.405 1.92-.449 1.004-.988 1.048-.988 1.92-.18.699.674 1.047.719 1.964.315.654-.315 1.178-.36 1.309-.09.436.674 1.876.539 2.312-.225.305-.629.48-.584 1.178.225 1.832 2.066 3.01.584 2.967-3.684-.087-3.504-.61-4.627-1.92-3.908-.436.225-.829.764-.829 1.168 0 .584-.174.539-.829-.225-.916-1.123-2.312-1.302-3.01-.404-.262.315-.524 1.572-.611 2.785l-.131 2.246-.829-2.246c-.436-1.257-1.222-2.605-1.701-3.054-.917-.809-.96-.809-1.92.449-.567.674-1.266 2.066-1.615 3.055-.392 1.168-.654 1.482-.698.898-.305-4.312-1.221-5.795-2.705-4.447-.392.404-.654.898-.567 1.123.131.179.044.449-.218.629-.218.134-.61-.225-.829-.809-.524-1.392-1.57-1.797-2.269-.943-.349.449-.654.494-.829.179-.305-.539-3.141-.898-4.886-.584zm4.45 1.483c0 .224-.479.449-1.09.449-1.047 0-1.09.09-1.09 2.92 0 1.662-.175 2.92-.437 2.92s-.436-1.258-.436-2.92c0-2.83-.044-2.92-1.091-2.92-.61 0-1.09-.225-1.09-.449 0-.27 1.177-.449 2.617-.449s2.618.179 2.618.449zm2.619.898c0 1.258.13 1.348 1.527 1.348 1.396 0 1.527-.09 1.527-1.348 0-.763.218-1.347.436-1.347.262 0 .436 1.437.436 3.369 0 1.931-.174 3.369-.436 3.369-.218 0-.436-.719-.436-1.572 0-1.483-.087-1.573-1.527-1.573s-1.527.09-1.527 1.573c0 .853-.175 1.572-.437 1.572-.261 0-.436-1.438-.436-3.369 0-1.932.175-3.369.436-3.369.262 0 .437.584.437 1.347zm10.166 1.707c1.309 3.325 1.352 3.684.785 3.684-.218 0-.524-.494-.654-1.123-.393-1.617-2.531-1.572-3.23.045-1.003 2.246-1.308.584-.348-1.752.523-1.258 1.134-2.695 1.265-3.145.48-1.347 1.003-.808 2.182 2.291zm5.89-.359l1.396 2.426v-2.561c0-1.392.218-2.56.436-2.56.262 0 .436 1.437.436 3.369 0 3.998-.392 4.043-2.574.449-.785-1.348-1.483-2.471-1.527-2.471-.043 0-.043 1.123-.043 2.471s-.131 2.471-.306 2.471c-.218 0-.349-.09-.349-.225v-3.189c0-3.594.48-3.639 2.53-.18z"
      ></path>
      <path
        fill={fill}
        d="M74.988 114.795c0 .224-.13.718-.261 1.123-.175.494 0 .718.61.718.655 0 .83-.224.655-.898-.262-.988-1.004-1.707-1.004-.943zm16.056-2.336c-.436.539-.698 1.841-.741 3.773-.088 2.426.043 3.055.785 3.729 1.134 1.078 3.665.718 5.061-.629l1.004-.989.305.944c.305 1.078 1.614 1.258 2.4.269.741-.898 1.178-.853 2.268.225.96.898 1.004.898 1.789.09.786-.809.786-.899-.349-3.774-.654-1.662-1.483-3.279-1.92-3.683-.741-.674-.872-.629-1.92.449-.654.674-1.09 1.303-1.003 1.482.088.135-.174.989-.61 1.842l-.83 1.572.044-1.662c.044-1.931-.61-2.965-2.574-3.818-1.876-.809-2.923-.719-3.709.18zm11.431 3.728c1.527 3.863 1.44 3.594.873 3.594-.262 0-.654-.494-.873-1.123-.305-.854-.741-1.123-1.701-1.123-.96 0-1.31.224-1.527 1.123-.175.629-.48 1.123-.698 1.123-.655 0-.524-.584.48-3.01.48-1.168 1.09-2.65 1.309-3.234.218-.584.479-.989.61-.854.088.09.786 1.662 1.527 3.504zm-6.893-2.381c1.003.899 1.047 3.594.044 4.717-.437.494-1.31.809-2.4.809h-1.658v-6.289h1.614c.873 0 1.964.314 2.4.763z"
      ></path>
      <path
        fill={fill}
        d="M100.381 115.513c-.436.989-.392 1.123.349 1.123.916 0 1.135-.718.524-1.707-.262-.404-.524-.269-.873.584zm-8.159.674c0 2.112.088 2.246 1.135 2.246 1.396 0 2.138-.763 2.138-2.246 0-1.482-.742-2.246-2.138-2.246-1.047 0-1.135.135-1.135 2.246zm1.79.764c-.48.494-.83-.27-.48-1.078.348-.764.348-.764.523 0 .13.449.087.943-.044 1.078zm14.484-4.043l-1.134 1.168-.48-.988c-.567-1.079-1.876-1.258-2.574-.36-.567.674 1.134 6.289 2.181 7.278.742.763 2.531.089 2.531-.899 0-.449.218-.584.524-.404.305.224.392.09.261-.315-.131-.359 0-1.257.306-1.976l.567-1.348.044 1.707c.087 2.875 1.57 4.403 2.923 3.01.305-.314 1.003-.135 2.094.449 1.702.854 1.702.854 2.923-.045 1.571-1.123 2.007-2.785 1.178-4.133-.48-.718-.523-1.168-.218-1.752.393-.584.306-.988-.305-1.662-1.135-1.302-2.923-1.213-3.927.18l-.829 1.123-.654-.943c-.48-.719-.917-.899-1.964-.674-.698.135-1.527.09-1.832-.18-.306-.269-.829-.045-1.615.764zm10.559.674c0 .224-.349.359-.742.314-2.225-.224-2.661 1.123-.698 1.887 2.094.808 2.443 2.246.829 3.324-.654.449-1.44.629-2.181.404-1.615-.404-1.397-.988.48-1.168 2.094-.179 2.268-.898.349-1.841-1.833-.899-2.182-2.786-.568-3.414 1.091-.405 2.531-.135 2.531.494zm-12.347 1.976l.741 2.516.829-2.516c.437-1.392 1.091-2.515 1.396-2.515.393 0 .306.673-.436 2.56-.523 1.438-1.091 3.01-1.265 3.459-.393 1.168-.829.584-2.138-3.01-.829-2.291-.96-3.009-.524-3.009.349 0 .96 1.078 1.397 2.515zm6.239.854c0 1.931-.175 3.369-.437 3.369-.261 0-.436-1.438-.436-3.369 0-1.932.175-3.369.436-3.369.262 0 .437 1.437.437 3.369zm2.618.719c0 .134-.306.539-.655.853-.611.539-.698.359-.567-1.078.087-1.482.174-1.617.654-.898.306.449.568.943.568 1.123zm-69.722 4.986c-.872.898-.654 2.965.393 3.279 1.047.36 2.574-.853 2.574-2.021 0-.899-.829-1.797-1.745-1.797-.393 0-.916.224-1.222.539zm2.531.943c0 .539-1.483 2.112-1.963 2.112-.131 0-.218-.629-.218-1.348 0-1.123.174-1.348 1.09-1.348.611 0 1.091.27 1.091.584zm2.618-.853c-.611.629-.524 2.83.087 3.234.698.449 2.181.449 2.88 0 .654-.404.698-2.83 0-3.234-.786-.494-2.487-.494-2.967 0zm1.527 1.168c.305 0 .698-.27.785-.584.131-.27.218.179.218 1.033 0 .853-.087 1.213-.218.764-.087-.405-.48-.764-.785-.764-.306 0-.698.359-.785.764-.131.449-.219.089-.219-.764 0-.854.088-1.303.218-1.033.088.314.48.584.786.584zm4.188-1.168c-.741.898-.436 3.01.48 3.594 1.091.673 2.836-.45 3.054-2.022.131-.719.131-1.213 0-1.078-.087.09-.48-.09-.829-.449-.785-.854-2.05-.854-2.705-.045zm2.749.943c.567 1.527-1.047 2.965-2.181 1.977-.655-.539-.83-1.842-.306-2.336.524-.584 2.225-.315 2.487.359z"
      ></path>
      <path
        fill={fill}
        d="M57.624 123.644c.174.944.96 1.033 1.134.045.087-.449-.13-.763-.567-.763-.437 0-.655.269-.567.718zm4.93-1.617c-.175.27.261.449.96.449.872 0 1.047.135.61.405-.349.224-.523.808-.349 1.347.131.674 0 .944-.436.944-.48 0-.61-.315-.48-1.079.175-.808 0-1.167-.61-1.302-.655-.18-.742-.135-.35.359.306.359.393.809.262 1.033-.349.584.916 1.573 1.658 1.303.742-.314 1.178-3.144.523-3.549-.698-.494-1.483-.449-1.788.09zm4.843.27c-1.178 1.168-.785 2.875.742 3.459 1.963.763 3.49-1.797 2.007-3.325-1.004-1.033-1.833-1.078-2.75-.134zm2.705 1.123c.174.988-1.09 2.246-1.876 1.931-.742-.314-1.265-1.797-.873-2.426.437-.763 2.574-.314 2.749.495z"
      ></path>
      <path
        fill={fill}
        d="M68.008 123.824c0 .494.305.898.654.898.35 0 .654-.404.654-.898s-.305-.899-.654-.899c-.349 0-.654.405-.654.899zm5.148-1.617c-1.09.808-1.004 2.83.13 3.414 1.222.674 3.011.18 2.968-.809-.044-1.662-.568-2.246-1.615-1.842-1.09.405-1.134 1.348-.043 1.663.48.134.48.089-.044-.315-.567-.404-.524-.494.262-.494 1.134 0 1.178 1.213.087 1.482-1.003.27-2.225-.898-1.92-1.797.131-.359.262-.763.262-.853 0-.09.393-.18.83-.18.479 0 1.003-.224 1.134-.449.392-.674-1.178-.539-2.051.18zm5.366 0c-.305.359-.48 1.213-.392 1.931.087.989.392 1.303 1.396 1.393 1.047.135 1.134.09.654-.494-.349-.36-.654-.494-.741-.27-.35.944-.96.315-.96-.943 0-1.123.174-1.348 1.003-1.348 1.31 0 1.746.45 1.135 1.168-.306.36-.306.629.043.854.655.404 1.091-1.123.568-1.977-.611-.988-2.051-1.123-2.706-.314zm5.28.09c-.306.359-.611 1.212-.655 1.886-.087 1.078.087 1.213 1.57 1.348 1.528.135 1.615.09 1.615-1.168 0-.719-.349-1.617-.785-2.021-.96-.899-1.004-.899-1.745-.045zm1.701 1.347c.48 1.348.131 2.067-.523 1.078-.35-.584-.437-.584-.786 0-.698 1.079-.96.27-.349-1.033.655-1.527 1.091-1.527 1.658-.045zm3.055-1.437c-.786.943-.437 3.144.523 3.324.829.18 2.487-1.438 2.487-2.381 0-1.437-2.094-2.066-3.01-.943zm2.486 1.078c.088.314-.218.719-.741.853-.48.135-.786.405-.655.629.131.225-.087.405-.436.405-.48 0-.698-.45-.698-1.393 0-1.213.13-1.348 1.178-1.213.61.09 1.222.404 1.352.719z"
      ></path>
      <path
        fill={fill}
        d="M89.386 123.375c0 .224.219.449.437.449a.444.444 0 00.436-.449c0-.27-.175-.449-.436-.449a.443.443 0 00-.437.449zm4.364-1.168c-.219.224-.437.988-.437 1.617 0 1.572.655 2.111 2.182 1.887 1.308-.18 1.701-.899 1.396-2.651-.175-1.033-2.356-1.662-3.142-.853zm1.046.808c.219.45.306.45.524 0 .436-.988 1.047-.539 1.047.809 0 .719-.174 1.348-.436 1.348-.218 0-.436-.315-.436-.674 0-.36-.175-.674-.437-.674-.218 0-.436.314-.436.674 0 .359-.174.674-.436.674-.218 0-.437-.629-.437-1.348 0-1.348.611-1.797 1.047-.809zm4.669-1.033c-.698.449-.785 3.055-.131 3.729.262.269.829.314 1.353.134.741-.224.916-.628.916-2.156 0-1.033-.175-1.662-.349-1.392-.175.269-.611.629-.96.763-.48.18-.436.27.218.27.742.045.785.135.218.494-.567.404-.567.494 0 .898.524.36.48.45-.305.45-.83 0-1.004-.27-1.004-1.348 0-.898.218-1.348.655-1.348.349 0 .654-.224.654-.449 0-.539-.436-.584-1.265-.045zm4.494.18c-.48.584-.48 1.572 0 2.83.131.359.785.629 1.658.584.785 0 1.134-.135.785-.27-.349-.134-.785-.494-.96-.763-.218-.36-.349-.315-.349.045 0 .314-.174.584-.436.584-.218 0-.436-.629-.436-1.348 0-1.168.174-1.348 1.134-1.348.873 0 1.091.18.96.989-.087.494.087 1.033.393 1.123.567.224.261-1.528-.437-2.471-.523-.674-1.701-.674-2.312.045zm-24.608 1.258c0 .224.219.314.437.179.261-.134.436-.359.436-.494 0-.09-.175-.18-.436-.18-.218 0-.437.225-.437.495z"
      ></path>
    </svg>
  )
}
export default forwardRef(PhotographerPage)

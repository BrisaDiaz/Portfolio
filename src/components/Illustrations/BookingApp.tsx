import React, { forwardRef } from 'react'
interface Props extends React.SVGAttributes<SVGSVGElement> {}
const defaultProps = {
  fill: 'currentColor',
  width: '154',
  height: '142',
}
function BookingApp(props: Props, ref?: React.LegacyRef<SVGSVGElement>) {
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
        d="M71.27 17.849c-1.191 1.19-1.036 1.76.725 2.071 1.087.259 1.553.621 1.553 1.294 0 .57.362.984.777.984.466 0 .776.466.776 1.294 0 .725-.259 1.243-.621 1.14-.362-.052-.725.466-.829 1.19-.103.725-.517 1.502-.931 1.71-.415.206-.725.983-.725 1.656 0 1.139-.207 1.294-1.813 1.294-2.899 0-9.578 1.502-12.426 2.796-3.365 1.502-6.42 4.194-7.352 6.472-.414.984-.88 3.884-1.036 6.472-.259 3.78-.517 4.867-1.294 5.385-.518.363-.932 1.14-.932 1.709 0 1.915-1.45 4.556-3.003 5.333-.88.414-2.278 1.501-3.158 2.382-1.347 1.398-1.605 2.019-1.605 4.142 0 2.278.155 2.64 2.122 4.349 10.46 8.957 50.482 9.993 67.051 1.76 3.78-1.864 4.867-3.313 4.867-6.524 0-2.433-.88-3.676-4.401-5.954-2.226-1.45-2.692-2.02-3.21-4.194-.363-1.398-1.088-2.847-1.709-3.262-.88-.621-1.035-1.294-1.035-4.711 0-6.938-1.554-9.941-6.68-12.686-3.003-1.657-9.526-3.417-13.099-3.572-2.226-.104-2.485-.26-2.485-1.346 0-.777-.363-1.347-1.036-1.502-.725-.207-1.035-.725-1.035-1.812 0-.88-.207-1.398-.518-1.19-.932.569-1.243-1.399-.363-2.072.518-.362.88-1.035.88-1.502 0-.517.467-.828 1.295-.828 1.709 0 2.33-1.45 1.036-2.382-1.45-1.035-8.75-.983-9.786.104zM41.654 96.394c.828.621.932 1.346.725 5.902l-.207 5.178h1.398c1.398 0 1.398-.052 1.139-2.744l-.311-2.744h5.851v1.812c0 1.035-.207 2.278-.518 2.796-.414.828-.31.932 1.19.88l1.71-.052-.208-5.074c-.155-3.52-.052-5.333.414-5.85.57-.674.311-.777-1.76-.777-2.226 0-2.382.052-1.657.828.466.414.829 1.657.829 2.744v1.916h-5.696v-2.226c0-1.502.26-2.33.932-2.693.673-.414.207-.517-1.916-.57-2.485 0-2.744.104-1.915.674zm19.726-.052c-2.019 1.087-2.847 2.64-2.795 5.333 0 1.398.259 2.951.621 3.366 2.848 3.624 8.957 3.365 10.977-.518 2.226-4.298-.777-8.802-5.8-8.802-1.086 0-2.433.31-3.002.621zm5.748 1.502c.725.776.984 1.864.984 3.831 0 4.142-2.382 6.058-5.437 4.401-2.07-1.087-2.33-6.368-.466-8.595.932-1.087 3.78-.88 4.919.363zm7.766-1.243c-.466 1.19.207 1.864.932.932.363-.518 1.14-.777 1.916-.673 1.19.155 1.243.362 1.243 3.521 0 1.864-.156 4.194-.311 5.229-.31 1.864-.259 1.916 1.294 1.864l1.605-.052-.155-5.333-.207-5.333h1.605c.932 0 1.76.363 2.071.88.466.829.518.725.57-.465v-1.398H80.33c-4.142 0-5.23.155-5.437.828zm15.274-.051c.363.413.518 2.484.363 5.746l-.156 5.075 3.573.155c3.832.155 4.453-.207 4.453-2.33 0-1.139 0-1.139-1.295.103-.673.725-1.812 1.295-2.485 1.295-1.139 0-1.294-.259-1.501-2.123-.208-2.537.155-2.848 2.174-1.812l1.553.725v-1.761c0-1.708-.051-1.76-.828-.983-.828.828-2.848.932-2.796.103v-2.174c0-1.606.156-1.813 1.398-1.813.725 0 1.812.363 2.33.88.88.777.932.777.932-.569v-1.346l-4.142.052c-3.47.051-4.09.207-3.573.776zm13.41-.053c.466.518.57 2.279.415 5.851l-.207 5.023 3.727.155c3.469.155 3.728.052 4.039-1.036.57-2.174.311-2.433-.984-1.191-.776.829-1.864 1.295-2.847 1.295h-1.554v-4.608c0-3.521.207-4.816.829-5.437.725-.776.569-.828-1.657-.828-2.071 0-2.33.103-1.761.776zm-53.174 18.588c-1.709 1.553-1.916 1.968-1.916 4.401 0 2.175.26 2.9 1.502 4.194 4.919 5.126 12.633-.88 9.32-7.249-1.76-3.417-5.955-4.038-8.906-1.346zm5.695-.155c1.606.725 2.434 2.485 2.434 5.074 0 4.919-5.954 6.524-8.18 2.278-1.14-2.071-.777-4.763.88-6.42 1.605-1.605 2.847-1.864 4.866-.932zm12.479-1.087c-3.47 1.398-4.505 6.938-1.864 9.837 2.588 2.9 6.938 2.589 8.905-.621 3.159-5.23-1.605-11.443-7.041-9.216zm5.28 1.605c1.14.932 1.761 3.883 1.192 5.902-.932 3.366-4.401 4.401-7.042 2.123-1.243-1.087-1.45-1.657-1.45-3.935 0-2.33.207-2.848 1.502-3.987 1.19-1.035 1.916-1.242 3.314-1.035.931.207 2.07.569 2.485.932zm15.223-1.761c-.414.104-1.657 1.502-2.744 3.055l-2.02 2.848 1.295 1.657c2.226 2.847 3.47 3.986 4.401 3.986.673 0 .155-.828-1.812-2.899l-2.692-2.951 2.122-2.486c1.191-1.398 2.33-2.537 2.59-2.537.206 0 .413-.259.413-.517 0-.518-.207-.57-1.553-.156zm9.579 0l-2.589.207.155 5.23c.156 3.883 0 5.333-.517 5.643-.415.259.828.466 3.003.466 3.417 0 3.727-.103 3.986-1.139.415-1.605.104-1.708-1.139-.466-.621.622-1.657 1.088-2.381 1.088-1.088 0-1.295-.259-1.295-1.502 0-.828-.155-1.864-.31-2.33-.26-.621.051-.828 1.19-.828.829 0 1.761.259 2.123.621.466.466.622.311.622-.673 0-1.191-.156-1.243-2.02-1.087l-2.02.207.26-2.278c.155-1.191.31-2.279.362-2.33.052-.052.932.103 2.02.31 1.708.415 1.915.363 1.915-.517 0-.518-.155-.932-.362-.881-.259.052-1.553.156-3.003.259zm-62.495.777c.829.828.829 9.32 0 10.148-.931.932 4.816.829 6.058-.103 1.243-.881 1.295-3.832.052-4.712-.725-.57-.777-.88-.259-1.968.518-1.139.466-1.605-.259-2.692-.725-1.087-1.242-1.294-3.52-1.294-2.072 0-2.538.155-2.072.621zm3.418.414c1.553.57 1.864 2.589.57 3.624-.726.57-.674.725.362 1.243 1.19.621 1.812 2.641 1.087 3.728-.259.311-1.19.777-2.071.984l-1.709.362v-5.229c0-2.9.104-5.23.207-5.23.156 0 .829.207 1.554.518zm42.663-.414c.829.828.829 9.32 0 10.148-.465.466-.362.621.674.621h1.242v-11.39H82.92c-1.035 0-1.138.155-.672.621zm26.251 5.074v5.695l1.554-.051c.88 0 1.242-.156.932-.311-.777-.311-.984-10.511-.208-10.511.259 0 1.088.207 1.813.518 1.864.673 1.915 3.314.051 4.298l-1.294.673 1.657 2.278c2.019 2.848 2.382 3.106 4.038 3.055 1.243 0 1.243-.052.208-.466-.57-.207-1.813-1.347-2.745-2.537-1.605-2.02-1.605-2.071-.621-2.641 1.502-.777 1.916-2.848.88-4.401-.725-1.087-1.242-1.294-3.572-1.294h-2.693v5.695z"
      ></path>
    </svg>
  )
}
export default forwardRef(BookingApp)

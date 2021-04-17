import { useCallback, useState } from 'react';
import utils from 'utils';

type HookProps<T> = {
  init?: T;
  debounceTime?: number;
};

export default <T>({ init, debounceTime = 100 }: HookProps<T>) => {
  const [value, setValue] = useState<T>(init);

  const debouncedSetState = useCallback(
    utils.debounce(setValue, debounceTime),
    [debounceTime],
  );

  return [value, debouncedSetState, setValue] as [
    T,
    React.Dispatch<React.SetStateAction<T>>,
    React.Dispatch<React.SetStateAction<T>>,
  ];
};

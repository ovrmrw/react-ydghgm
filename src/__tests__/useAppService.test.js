import { renderHook, act } from "@testing-library/react-hooks";
import { useAppService } from "../App";

test("useAppService", () => {
  const { result } = renderHook(() => useAppService());

  expect(result.current.state).toEqual({ counter: 0 });

  act(() => {
    result.current.increment();
  });
  expect(result.current.state).toEqual({ counter: 1 });

  for (let i = 0; i < 9; i++) {
    act(() => {
      result.current.increment();
    });
  }
  expect(result.current.state).toEqual({ counter: 10 });

  act(() => {
    result.current.initState();
  });
  expect(result.current.state).toEqual({ counter: 0 });
});

import { cloneElement, ReactElement, useRef } from 'react';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

interface FadeTransitionProps {
  /**
   * 자식 컴포넌트의 마운트 여부를 결정하는 `boolean` 값 입니다.
   */
  in: boolean;

  /**
   * 자식 컴포넌트 입니다.
   */
  children: ReactElement;
}

/**
 * 자식 컴포넌트가 mount, unmount 될 때 `300ms`동안 `ease-in-out` 트랜지션이 적용 됩니다.
 */
function FadeTransition({ in: inProp, children }: FadeTransitionProps) {
  const nodeRef = useRef(null);

  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration} unmountOnExit>
      {(state) =>
        cloneElement(children, {
          ref: nodeRef,
          style: {
            ...defaultStyle,
            ...transitionStyles[state],
          },
        })
      }
    </Transition>
  );
}

export default FadeTransition;

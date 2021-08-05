import React, { useRef, useCallback, useEffect } from 'react';
import animejs from 'animejs';
const PREFIX = "__anime__";

function Anime(props) {
    const targets = useRef([]);
    const targetRefs = useRef([]);
    const animeRef = useRef(null);
  
    const createAnime = useCallback(() => {
      if (targets.current.length > 0 && animeRef !== undefined)
        animejs.remove(targets);
  
      targets.current = [];
      for (let ref of targetRefs.current) {
        if (ref.current) targets.current.push(ref.current);
      }
  
      const animeProps = { ...props, targets: targets.current };
      delete animeProps.children;
      delete animeProps.svg;
      animeRef.current = animejs(animeProps);
    //   props.passAnime(animeRef.current)
    }, [props]);
  
    useEffect(() => {
      createAnime();
    }, [createAnime]);

    let childs = []
  
    const refs = targetRefs.current;
    if (!Array.isArray(props.children)) childs = [props.children];
    else childs = props.children
    return (
      <>
        {
          childs.map((child, i) => {
            refs.push(React.createRef());
            const El = props.svg ? "g" : "div";
            return (
              <El ref={refs[refs.length - 1]} key={`${PREFIX}${i}`}>
                {child}
              </El>
            );
          })
        }
      </>
    );
  }

  export default Anime
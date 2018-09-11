import React from 'react'
import { Typography, Colors as ColorVars , MarginPaddingSize } from '../vars'

/**
 * This is a color legend that is meant to be 
 * sourced inside of components!
 * 
 * NOT IMPORTED AS A COMPONENT
 */
const Colors = () => (
  <div className="LegendWrapper">
    <div className="Legend">
      <h4>Royal</h4>
      <div className="Circle Royal"/>
    </div>
    <div className="Legend">
      <h4>Malibu</h4>
      <div className="Circle Malibu"/>
    </div>
    <div className="Legend">
      <h4>PoloBlue</h4>
      <div className="Circle PoloBlue"/>
    </div>
    <div className="Legend">
      <h4>Slate</h4>
      <div className="Circle Slate"/>
    </div>
    <div className="Legend">
      <h4>Gallery</h4>
      <div className="Circle Gallery"/>
    </div>
    <div className="Legend">
      <h4>Alabaster</h4>
      <div className="Circle Alabaster"/>
    </div>
    <div className="Legend">
      <h4>Mirage</h4>
      <div className="Circle Mirage"/>
    </div>
    <div className="Legend">
      <h4>LaPalma</h4>
      <div className="Circle LaPalma"/>
    </div>
    <div className="Legend">
      <h4>Atlantis</h4>
      <div className="Circle Atlantis"/>
    </div>
    <div className="Legend">
      <h4>Yellow</h4>
      <div className="Circle Yellow"/>
    </div>
    <div className="Legend">
      <h4>Crusta</h4>
      <div className="Circle Crusta"/>
    </div>
    <div className="Legend">
      <h4>Cinnabar</h4>
      <div className="Circle Cinnabar"/>
    </div>
    <div className="Legend">
      <h4>Lavender</h4>
      <div className="Circle Lavender"/>
    </div>
    <div className="Legend">
      <h4>Violet</h4>
      <div className="Circle Violet"/>
    </div>
    <div className="Legend">
      <h4>San Marino</h4>
      <div className="Circle SanMarino"/>
    </div>
    <div className="Legend">
      <h4>Resolution Blue</h4>
      <div className="Circle ResolutionBlue"/>
    </div>
    <style jsx>{`
      .LegendWrapper {
        display: flex;
        flex-wrap: wrap;
        width: 850px;
      }

      .Legend {
        width: ${MarginPaddingSize[4]};
        padding: 0 ${MarginPaddingSize[0]} ${MarginPaddingSize[0]} 0;
      }
      
      i {
        font-size: ${Typography.fontSize[4]}
      }

      h4 {
        margin-bottom: ${MarginPaddingSize[0]};
      }

      .Circle {
        width: ${MarginPaddingSize[3]};
        height: ${MarginPaddingSize[3]};
        border-radius: 50%;

        &.Royal {
          background: ${ColorVars.Royal}
        }

        &.Malibu {
          background: ${ColorVars.Malibu}
        }

        &.PoloBlue {
          background: ${ColorVars.PoloBlue}
        }

        &.Slate {
          background: ${ColorVars.Slate}
        }

        &.Gallery {
          background: ${ColorVars.Gallery}
        }

        &.Alabaster {
          background: ${ColorVars.Alabaster}
        }

        &.Mirage {
          background: ${ColorVars.Mirage}
        }

        &.LaPalma {
          background: ${ColorVars.LaPalma}
        }

        &.Atlantis {
          background: ${ColorVars.Atlantis}
        }

        &.Yellow {
          background: ${ColorVars.Yellow}
        }

        &.Crusta {
          background: ${ColorVars.Crusta}
        }

        &.Cinnabar {
          background: ${ColorVars.Cinnabar}
        }

        &.Lavender {
          background: ${ColorVars.Lavender}
        }

        &.Violet {
          background: ${ColorVars.Violet}
        }

        &.SanMarino {
          background: ${ColorVars.SanMarino}
        }

        &.ResolutionBlue {
          background: ${ColorVars.ResolutionBlue}
        }
      }
    `}</style>
  </div>
)

export default Colors

import React from "react";

import { generateEmojiGrid } from "../../../lib/game-helpers";
import CountdownToNextPuzzle from "../../CountdownToNextPuzzle";
import ShareScoreButton from "../../ShareScoreButton";
import BaseModal from "../BaseModal";
import { GameStatusContext } from "../../../providers/GameStatusProvider";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";
import { Button } from "../../ui/button";

function ViewResultsModal() {
  const { submittedGuesses } = React.useContext(GameStatusContext);
  const { gameData } = React.useContext(PuzzleDataContext);

  return (
    <BaseModal
      title=""
      trigger={
        <div className="button-controls"><Button variant="submit" className="w-full button-control button-wide" children={"View Results"} /></div>
      }
      initiallyOpen={false}
      showActionButton={false}
      footerElements={<ShareScoreButton buttonText={"Share Your Score!"} />}
    >
      <div className="flex flex-col place-content-center">
        <p className="text-center game-caption">
          Your Guesses Are Represented Below
        </p>
        <span className="text-center whitespace-pre mb-2">
          {"\n"}
          {generateEmojiGrid(gameData, submittedGuesses)}
        </span>
      </div>
    </BaseModal>
  );
}

export default ViewResultsModal;

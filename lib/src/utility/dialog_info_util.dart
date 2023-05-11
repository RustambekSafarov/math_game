import 'package:mathgame/src/core/app_constant.dart';
import 'package:mathgame/src/data/models/game_info_dialog.dart';

class DialogInfoUtil {
  static GameInfoDialog getInfoDialogData(GameCategoryType gameCategoryType) {
    switch (gameCategoryType) {
      case GameCategoryType.CALCULATOR:
        return GameInfoDialog(
          title: "Kalkulyator",
          image: "assets/gif/calculator-intro.gif",
          dec: "Berilgan tenglamani to'g'ri yechish kerak.",
          correctAnswerScore: KeyUtil.calculatorScore,
          wrongAnswerScore: KeyUtil.calculatorScoreMinus,
        );
      case GameCategoryType.GUESS_SIGN:
        return GameInfoDialog(
          title: "Belgini top",
          image: "assets/gif/whats-the-sign-intro.gif",
          dec: "Berilgan tenglamani tugatuvchi to'g'ri belgini topishingiz kerak.",
          correctAnswerScore: KeyUtil.guessSignScore,
          wrongAnswerScore: KeyUtil.guessSignScoreMinus,
        );
      case GameCategoryType.SQUARE_ROOT:
        return GameInfoDialog(
          title: "Kvadrat ildiz",
          image: "assets/gif/sqroot-intro.gif",
          dec: "Berilgan sonning kvadrat ildizi.",
          correctAnswerScore: KeyUtil.squareRootScore,
          wrongAnswerScore: KeyUtil.squareRootScoreMinus,
        );
      case GameCategoryType.MATH_PAIRS:
        return GameInfoDialog(
          title: "Matematik juftlik",
          image: "assets/gif/math-pair-intro.gif",
          dec: "Har bir kartada tenglama yoki javob mavjud. Tenglamani to'g'ri javob bilan moslang.",
          correctAnswerScore: KeyUtil.mathematicalPairsScore,
          wrongAnswerScore: KeyUtil.mathematicalPairsScoreMinus,
        );
      case GameCategoryType.CORRECT_ANSWER:
        return GameInfoDialog(
          title: "To'g'ri javob",
          image: "assets/gif/correct-answer.gif",
          dec: "Tenglamani tugatish uchun to'g'ri raqamni tanlang.",
          correctAnswerScore: KeyUtil.correctAnswerScore,
          wrongAnswerScore: KeyUtil.correctAnswerScoreMinus,
        );
      case GameCategoryType.MAGIC_TRIANGLE:
        return GameInfoDialog(
          title: "Sehrli uchburchak",
          image: "assets/gif/magic-triangle-intro.gif",
          dec: "Uchburchakning har bir tomonining yig'indisi berilgan raqamga teng bo'lishi kerak. Istalgan raqamni joylashtirish uchun uchburchak doirasini tanlang va paneldagi istalgan raqamni bosing.",
          correctAnswerScore: KeyUtil.magicTriangleScore,
          wrongAnswerScore: KeyUtil.magicTriangleScore,
        );
      case GameCategoryType.MENTAL_ARITHMETIC:
        return GameInfoDialog(
          title: "Mental Arifmetika",
          image: "assets/gif/mental-arith-intro.gif",
          dec: "Operator bilan raqam birma-bir ko'rsatiladi. Raqamni operator bilan eslab qolishingiz va yakuniy javobni yozishingiz kerak (yuqori yo'q).",
          correctAnswerScore: KeyUtil.mentalArithmeticScore,
          wrongAnswerScore: KeyUtil.mentalArithmeticScoreMinus,
        );
      case GameCategoryType.QUICK_CALCULATION:
        return GameInfoDialog(
          title: "Tez hisoblash",
          image: "assets/gif/quick-calculation-intro.gif",
          dec: "Oddiy tenglamani birma-bir yeching. Tezroq yechsangiz, keyingi tenglamani yechish uchun ko'proq vaqt beriladi.",
          correctAnswerScore: KeyUtil.quickCalculationScore,
          wrongAnswerScore: KeyUtil.quickCalculationScoreMinus,
        );
      case GameCategoryType.MATH_GRID:
        return GameInfoDialog(
          title: "Matematik jadval",
          image: "assets/gif/math-machine-intro.gif",
          dec: "Yuqorida ko'rsatilgan javobga erishish uchun matematika tarmog'idan raqamni tanlang. Yuqoridagi javobga erishish uchun istalgan raqamni tanlashingiz mumkin.",
          correctAnswerScore: KeyUtil.mathGridScore,
          wrongAnswerScore: KeyUtil.mathGridScore,
        );
      case GameCategoryType.PICTURE_PUZZLE:
        return GameInfoDialog(
          title: "Rasmli boshqotirma",
          image: "assets/gif/picture-puzzle-intro.gif",
          dec: "Har bir shakl raqamni ifodalaydi. Berilgan tenglamadan har bir shaklning sonini toping va oxirgi tenglamani yeching.",
          correctAnswerScore: KeyUtil.picturePuzzleScore,
          wrongAnswerScore: KeyUtil.picturePuzzleScore,
        );
      case GameCategoryType.NUMBER_PYRAMID:
        return GameInfoDialog(
          title: "Raqamolar piramidasi",
          image: "assets/gif/num-pyramid.gif",
          dec: "Ketma-ket hujayralar yig'indisi yuqori katakchaga joylashtirilishi kerak. Raqamlar piramidasini hal qilish uchun barcha katakchalarni to'g'ri to'ldirishingiz kerak.",
          correctAnswerScore: KeyUtil.numberPyramidScore,
          wrongAnswerScore: KeyUtil.numberPyramidScore,
        );
    }
  }
}

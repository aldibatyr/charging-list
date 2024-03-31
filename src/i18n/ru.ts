import { Translations } from "./en"

const ru: Translations = {
  common: {
    ok: "OK!",
    cancel: "Отмена",
    back: "Назад",
    logOut: "Выйти",
  },
  welcomeScreen: {
    postscript:
      "Список может быть неполным, поэтому, если какие-либо данные устарели, вы можете сообщить нам об этом. Мы всегда рады получить ваш отзыв!",
    readyForLaunch: "Вы собираетесь увидеть все зарядные станции!",
    exciting: "(о, это захватывающе!)",
    letsGo: "Поехали!",
  },
  errorScreen: {
    title: "Что-то пошло не так!",
    friendlySubtitle:
      "Пожалуйста, перезагрузите приложение. Если ошибка повторяется, пожалуйста, сообщите нам.",
    reset: "RESET APP",
    traceTitle: "Error from %{name} stack",
  },
  emptyStateComponent: {
    generic: {
      heading: "Так пусто... так грустно",
      content:
        "Данные еще не найдены. Попробуйте нажать кнопку для обновления или перезагрузки приложения.",
      button: "Давайте попробуем снова",
    },
  },

  errors: {
    invalidEmail: "Неверный адрес электронной почты.",
  },
  loginScreen: {
    signIn: "Войти",
    enterDetails:
      "Введите свои данные ниже, чтобы разблокировать супер секретную информацию. Вы никогда не угадаете, что у нас тут есть. Или, возможно, угадаете; здесь не ракетная наука.",
    emailFieldLabel: "Электронная почта",
    passwordFieldLabel: "Пароль",
    emailFieldPlaceholder: "Введите свой адрес электронной почты",
    passwordFieldPlaceholder: "Супер секретный пароль здесь",
    tapToSignIn: "Нажмите, чтобы войти!",
    hint: "Подсказка: вы можете использовать любой адрес электронной почты и свой любимый пароль :)",
    tapToEnterAnon: "Нажмите, чтобы войти в режим Anon",
  },
  navigator: {
    mapTab: "Карта",
    listTab: "Список",
  },
  demoNavigator: {
    componentsTab: "Components",
    debugTab: "Debug",
    communityTab: "Community",
    podcastListTab: "Podcast",
  },
  demoCommunityScreen: {
    title: "Connect with the community",
    tagLine:
      "Plug in to Infinite Red's community of React Native engineers and level up your app development with us!",
    joinUsOnSlackTitle: "Join us on Slack",
    joinUsOnSlack:
      "Wish there was a place to connect with React Native engineers around the world? Join the conversation in the Infinite Red Community Slack! Our growing community is a safe space to ask questions, learn from others, and grow your network.",
    joinSlackLink: "Join the Slack Community",
    makeIgniteEvenBetterTitle: "Make Ignite even better",
    makeIgniteEvenBetter:
      "Have an idea to make Ignite even better? We're happy to hear that! We're always looking for others who want to help us build the best React Native tooling out there. Join us over on GitHub to join us in building the future of Ignite.",
    contributeToIgniteLink: "Contribute to Ignite",
    theLatestInReactNativeTitle: "The latest in React Native",
    theLatestInReactNative: "We're here to keep you current on all React Native has to offer.",
    reactNativeRadioLink: "React Native Radio",
    reactNativeNewsletterLink: "React Native Newsletter",
    reactNativeLiveLink: "React Native Live",
    chainReactConferenceLink: "Chain React Conference",
    hireUsTitle: "Hire Infinite Red for your next project",
    hireUs:
      "Whether it's running a full project or getting teams up to speed with our hands-on training, Infinite Red can help with just about any React Native project.",
    hireUsLink: "Send us a message",
  },
  demoShowroomScreen: {
    jumpStart: "Components to jump start your project!",
    lorem2Sentences:
      "Nulla cupidatat deserunt amet quis aliquip nostrud do adipisicing. Adipisicing excepteur elit laborum Lorem adipisicing do duis.",
    demoHeaderTxExample: "Yay",
    demoViaTxProp: "Via `tx` Prop",
    demoViaSpecifiedTxProp: "Via `{{prop}}Tx` Prop",
  },
  demoDebugScreen: {
    howTo: "HOW TO",
    title: "Debug",
    tagLine:
      "Congratulations, you've got a very advanced React Native app template here.  Take advantage of this boilerplate!",
    reactotron: "Send to Reactotron",
    reportBugs: "Report Bugs",
    demoList: "Demo List",
    demoPodcastList: "Demo Podcast List",
    androidReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running, run adb reverse tcp:9090 tcp:9090 from your terminal, and reload the app.",
    iosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    macosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    webReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    windowsReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
  },
  demoPodcastListScreen: {
    title: "React Native Radio episodes",
    onlyFavorites: "Only Show Favorites",
    favoriteButton: "Favorite",
    unfavoriteButton: "Unfavorite",
    accessibility: {
      cardHint:
        "Double tap to listen to the episode. Double tap and hold to {{action}} this episode.",
      switch: "Switch on to only show favorites",
      favoriteAction: "Toggle Favorite",
      favoriteIcon: "Episode not favorited",
      unfavoriteIcon: "Episode favorited",
      publishLabel: "Published {{date}}",
      durationLabel: "Duration: {{hours}} hours {{minutes}} minutes {{seconds}} seconds",
    },
    noFavoritesEmptyState: {
      heading: "This looks a bit empty",
      content:
        "No favorites have been added yet. Tap the heart on an episode to add it to your favorites!",
    },
  },
  location: {
    stalls: "{{count}} постов",
    navigate: "Перейти",
  },
  locations: {
    empty: "Нет доступных мест",
  },
}

export default ru

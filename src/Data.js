const questions = {
  getAllQuestions: () => {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: '1',
          title: 'Oil, natural gas and coal are examples of …',
          answers: [
            'Fossil fuels',
            'Renewable resources',
            'Biofuels',
            'Geothermal resources'
          ]
        },
        {
          id: '2',
          title: `A scientist is conducting a study to determine how well a new medication treats ear infections. The scientist tells the participants to put 10 drops in their infected ear each day. After two weeks, all participants ear infections had healed.
          Which of the following changes to the design of this study would most improve the ability to test if the new medication effectively treats ear infections?`,
          answers: [
            'Create a second group of participants with ear infections who use 15 drops a day',
            'Have participants use ear drops for only one week',
            'Have participants put ear drops in both their infected ear and healthy ear',
            'Create a second group of participants with ear infections who do not use any ear drops'
          ]
        }
      ])
    })
  }
}
export default questions

import shuffler from '../lib/utils/shuffler';

const dataReducer = (data, action) => {
  switch (action.type) {
    case 'increment_score':
      if (data.score == data.target) {
        return {
          ...data,
          status: 'win',
        };
      } else {
        return {
          ...data,
          score: data.score + 1,
        };
      }

    case 'shuffle_characters':
      return { ...data, characters: shuffler(data.characters) };

    case 'lose':
      return {
        ...data,
        status: 'lose',
      };

    case 'rinnegan':
      return {
        ...data,
        status: 'rinnegan',
      };

    case 'sharingan':
      return {
        ...data,
        status: 'sharingan',
      };

    case 'change_game_status':
      return {
        ...data,
        status: action.status,
      };

    case 'new_game':
      return {
        ...action.data,
      };
  }
};

export default dataReducer;

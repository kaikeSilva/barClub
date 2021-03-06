import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import TopNavigation from '../../../components/TopNavigation';
import BottomNavigation from '../../../components/BottomNavigation';
import {
  Feather as Icon,
  Ionicons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';

interface Beer {
  id: number;
  name: string;
  image: ImageSourcePropType;
  type: string;
  status: number;
}

const BeerCollection = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [filter, setFilter] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  let letter = 'A';
  let first = true;

  let beers: Beer[] = [
    { id: 4,
      name: 'Eugênia',
      image: require('../../../assets/colorado-eugenia.png'),
      type: 'Session IPA',
      status: 1,
    },
    { id: 1,
      name: 'HopCorn IPA',
      image: require('../../../assets/wals-hopcornipa.png'),
      type: 'English India Pale Ale',
      status: 0
    },
    { id: 2,
      name: 'Goose Island IPA',
      image: require('../../../assets/goose-ipa.png'),
      type: 'English India Pale Ale',
      status: 0
    },
  ] 

  beers.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  function handleNavigateToBars() {
    navigation.navigate('Bars');
  }

  function handleNavigateToBeerDetails() {
    navigation.navigate('BeerDetails')
  }

  function alphabetDivision(name: string) {
    if (first) {
      first = false;
      return (
        <Text style={styles.alphabetLether}>{name[0].toLocaleUpperCase()}</Text>
      );
    }
    if (letter != name[0]) {
      letter = name[0];
      return <Text style={styles.alphabetLether}>{name[0]}</Text>;
    }
  }

  return (
    <>
      <View style={styles.searchInputContainer}>
        <Icon
          style={styles.iconStyle}
          name="search"
          size={24}
          color="#DE2B2B"
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => onChangePassword(text)}
          value={password}
        />
        <Icon name="filter" size={24} color="black" />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {beers.map(beer => (
            <View key={beer.id}>
              <TouchableOpacity 
                style={{ backgroundColor: 'transparent' }}
                onPress={handleNavigateToBeerDetails}>

                {alphabetDivision(beer.name)}
                <View style={styles.beerCard}>
                  <Image source={beer.image}/>
                  <View style={styles.beerTextCard}>
                    <Text style={styles.beerNameText}>{beer.name}</Text>
                    <Text style={styles.beerTypeText}>{beer.type}</Text>
                    {beer.status ? null : <Text style={styles.beerStatusText}>Voce ainda não consumiu essa cerveja</Text>}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <BottomNavigation />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  //FILTER STYLES
  searchInputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#FF783F',
    padding: 10,
  },

  inputStyle: {
    flex: 1,
    backgroundColor: 'white',
  },

  iconStyle: {
    paddingRight: 10,
  },

  textInput: {
    height: 40,
    padding: 8,
    width: '90%',

    marginTop: 10,
    marginBottom: 10,
    borderColor: '#FF783F',
    borderWidth: 1,
  },

  alphabetLether: {
    fontSize: 24,
    color: '#E23A3A',
    paddingHorizontal: 10,
  },

  //BEER CARD STYLES
  scrollView: {
    width: '100%',
  },

  beerCard: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#FFF6F6',
  },

  beerTextCard: {
    paddingLeft: 20,
    paddingTop: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },

  beerNameText: {
    fontSize: 24,
    fontFamily: 'Lato_700Bold',
    color: '#E23A3A',
  },

  beerTypeText: {
    fontSize: 20,
    fontFamily: 'Lato_400Regular',
    color: '#E23A3A',
    fontStyle: 'italic',
  },

  beerStatusText: {
    fontSize: 20,
    fontFamily: 'Lato_400Regular',
    color: '#777676',
  },
});

export default BeerCollection;

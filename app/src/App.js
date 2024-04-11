  import React, { useEffect, useState, useRef } from 'react';
  import * as echarts from 'echarts';

  function App() {
    const [type, setType] = useState([]);
    const [graphData, setGraphData] = useState({
      "damage_relations": {
      "double_damage_from": [],
      "double_damage_to": [],
      },
    });
    const chartRef = useRef(null);
    const chartRef2 = useRef(null);
    const chartRef3 = useRef(null);

    useEffect(() => {
      fetchPokemonData();
      initializeChart();
      initializeDamageFromChart();
      initializeDamageToChart();
    }, []);

    const fetchPokemonData = () => {
      fetch(`https://pokeapi.co/api/v2/type/`)
        .then(response => response.json())
        .then(data => {
          const types = data.results.map(pokemon => pokemon.name);
          setType(types);
        })
        .catch(error => {
          console.log('Error data:', error);
        });
    };

    const initializeChart = () => {
      const chartDom = chartRef.current;
      const myChart = echarts.init(chartDom);

      const option = {
        xAxis: {
          type: 'category',
          data: ['Pokemons', 'Moves']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: '',
            type: 'bar'
          }
        ]
      };

      option && myChart.setOption(option);
    };

    const initializeDamageFromChart = (graphData) => {
      const chartDom = chartRef2.current;
      const myChart = echarts.init(chartDom);
    
      const option = {
        xAxis: {
          type: 'category',
          data: ['Pokemons Types']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: '',
            type: 'bar'
          }
        ]
      };
    
      option && myChart.setOption(option);
    };

    const initializeDamageToChart = (graphData) => {
      const chartDom = chartRef3.current;
      const myChart = echarts.init(chartDom);
    
      const option = {
        xAxis: {
          type: 'category',
          data: ['Pokemons Types']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: '',
            type: 'bar'
          }
        ]
      };
    
      option && myChart.setOption(option);
    };

    function handleChange() {
      const inputValue = document.getElementById('type').value;
      if (inputValue === 'select') {
        // add a return value to select the type
        return ''
      }
      fetch(`https://pokeapi.co/api/v2/type/${inputValue}`)
      .then(response => response.json())
      .then(data => {setGraphData(data)
      updatePokemonChart(data)
      updateDamageFromChart(data);
      updateDamageToChart(data);})
  }

  const updatePokemonChart = (graphData) => {
    const myChart = echarts.getInstanceByDom(chartRef.current);

    const updatedXAxisData = ['Pokemons', 'Moves'];
    const updatedSeriesData = [graphData.pokemon.length, graphData.moves.length];

    const option = {
      xAxis: {
        type: 'category',
        data: updatedXAxisData
      },
      series: [
        {
          data: updatedSeriesData,
          type: 'bar'
        }
      ]
    };

    myChart.setOption(option);
  };

  const updateDamageFromChart = async (graphData) => {
    try {
      const myChart = echarts.getInstanceByDom(chartRef2.current);
      const doubleDamageFrom = graphData.damage_relations.double_damage_from.map((e) => e.name);
      const urls = graphData.damage_relations.double_damage_from.map((e) => e.url);
  
      const pokeValues0 = await Promise.all(urls.map(async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response error');
        }
        const data = await response.json();
        return data.pokemon.length;
      }));
  
      const updatedXAxisData = doubleDamageFrom;
      const updatedSeriesData = pokeValues0;
  
      console.log(updatedSeriesData);
  
      const option = {
        xAxis: {
          type: 'category',
          data: updatedXAxisData
        },
        series: [
          {
            data: updatedSeriesData,
            type: 'bar'
          }
        ]
      };
  
      myChart.setOption(option);
    } catch (error) {
      console.error('Error to update:', error);
    }
  };

  const updateDamageToChart = async (graphData) => {
    try {
      const myChart = echarts.getInstanceByDom(chartRef3.current);
      const doubleDamageTo = graphData.damage_relations.double_damage_to.map((e) => e.name);
      const urls = graphData.damage_relations.double_damage_to.map((e) => e.url);
  
      const pokeValues = await Promise.all(urls.map(async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response error');
        }
        const data = await response.json();
        return data.pokemon.length;
      }));
  
      const updatedXAxisData = doubleDamageTo;
      const updatedSeriesData = pokeValues;
  
      // console.log(updatedSeriesData);
  
      const option = {
        xAxis: {
          type: 'category',
          data: updatedXAxisData
        },
        series: [
          {
            data: updatedSeriesData,
            type: 'bar'
          }
        ]
      };
  
      myChart.setOption(option);
    } catch (error) {
      console.error('Error to update:', error);
    }
  };

    return (
      <div className='content-center my-10 mx-10 bg-orange-100/65 h-full border px-10 py-2 pr-8 rounded shadow'>
        <form className='text-zinc-800/90 font-mono text-center my-5 block w-full bg-gray-150 h-full px-20 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
        <div className='inline-block relative w-64 '>
          <label className='text-zinc-800/90 font-mono font-semibold' for='type'>Select a Pokemon Type</label>
          <select className='text-zinc-800/90 font-mono font-semibold focus:outline-none my-2 bg-white border border-gray-400/100 px-6 rounded shadow leading-tight'name="types" id="type" onChange={handleChange}>
            <option>
              None
            </option>
              {type.map((name, index) => (
                <option key={index}>
                {name}
                </option>
              ))}
          </select>
        </div>
        </form>
        <div className="pl-16 text-center">
          <div className='w-full flex flex-wrap justify-center'>
            <div>
              <p className='text-zinc-800/90 mx-40 border-gray-400/100 ounded shadow leading-tight font-mono font-semibold'>POKEMONS</p>
              <div className='border-gray-400/100 ounded shadow leading-tight'ref={chartRef} style={{ 
                width: '1200px',
                height: '400px',
                marginTop: '15px',
                backgroundColor: [
                  'rgb(228,228,248)',
                ],
                }}>
              </div>
            </div>
            <div>
              <p className='text-zinc-800/90 mx-20 my-5 border-gray-400/100 ounded shadow leading-tight font-mono font-semibold'>DOUBLE DAMAGE FROM</p>
              <div className='m-1 border-gray-400/100 shadow leading-tight' ref={chartRef2} style={{
                backgroundColor: [
                  'rgb(228,248,231)',
                ],
                width: '590px',
                height: '300px',
                marginTop: '15px', 
                }}>
              </div>
            </div>
            <div>
              <p className='text-zinc-800/90 mx-20 border-gray-400/100 ounded shadow leading-tight my-5 font-mono font-semibold'>DOUBLE DAMAGE TO</p>
              <div className='m-1 border-gray-400/100 shadow leading-tight'ref={chartRef3} style={{
                backgroundColor: [
                  'rgb(248,228,228)',
                ],
                width: '590px',
                height: '300px',
                marginTop: '15px',
                marginBottom: '30px' 
                }}>
              </div>
            </div>  
          </div>
        </div>
      </div>
    );
  }

  export default App;

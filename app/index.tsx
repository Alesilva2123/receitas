// Importação dos módulos necessários do React e React Native
import React, { useEffect, useState } from 'react'; // React, useEffect e useState são usados para o gerenciamento de estado e efeitos colaterais
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native'; // Componentes e estilos do React Native
import axios from 'axios'; // Biblioteca para fazer requisições HTTP (usada para buscar dados da API)

// Definindo a estrutura de dados que será usada para a receita
interface Meal {
    idMeal: string; // ID único da receita
    strMeal: string; // Nome da receita
    strMealThumb: string; // URL da imagem da receita
    strInstructions: string; // Instruções de preparo da receita
}

// Componente principal da aplicação
const MealApp = () => {
    // Definindo o estado do componente: meal (armazenará os dados da receita) e loading (indica se os dados estão carregando)
    const [meal, setMeal] = useState<Meal | null>(null); // Inicialmente, meal é null
    const [loading, setLoading] = useState<boolean>(false); // Inicialmente, loading é false (não está carregando)

    // Função assíncrona para buscar uma receita aleatória da API
    const fetchMeal = async () => {
        setLoading(true); // Define o estado loading como true, indicando que os dados estão sendo carregados
        try {
            // Fazendo a requisição HTTP para a API themealdb
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
            const mealData = response.data.meals[0]; // Pegando os dados da primeira receita da resposta
            setMeal(mealData); // Atualiza o estado meal com os dados da receita
        } catch (error) {
            console.error('Erro ao buscar a receita', error); // Em caso de erro na requisição, imprime no console
        } finally {
            setLoading(false); // Define loading como false após a requisição, independentemente de sucesso ou erro
        }
    };

    // useEffect é usado para chamar a função fetchMeal assim que o componente for montado
    useEffect(() => {
        fetchMeal(); // Chama a função fetchMeal ao carregar o componente
    }, []); // O array vazio [] garante que a função será chamada apenas uma vez, ao montar o componente

    // Se a aplicação está no estado de "loading" (carregando), exibe o indicador de carregamento
    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" /> {/* Indicador de carregamento */}
                <Text>Carregando...</Text> {/* Texto indicando que está carregando */}
            </View>
        );
    }

    // Quando os dados da receita são carregados, exibe a interface com os detalhes da receita
    return (
        <ScrollView> {/* Usamos ScrollView para garantir que o conteúdo seja rolável */}
            <View style={styles.container}>
                {meal ? (  // Verifica se a variável meal tem dados (se a receita foi carregada com sucesso)
                    <>
                        {/* Exibe a imagem da receita */}
                        <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
                        {/* Exibe o nome da receita */}
                        <Text style={styles.title}>{meal.strMeal}</Text>
                        {/* Exibe as instruções de preparo da receita */}
                        <Text style={styles.instructions}>{meal.strInstructions}</Text>
                        {/* Botão para carregar uma nova receita */}
                        <TouchableOpacity style={styles.button} onPress={fetchMeal}>
                            <Text style={styles.buttonText}>Carregar Nova Receita</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <Text>Não foi possível carregar uma receita.</Text>  // Caso não haja dados para exibir
                )}
            </View>
        </ScrollView>
    );
};

// Definição dos estilos com o StyleSheet do React Native
const styles = StyleSheet.create({
    container: {
        flex: 1, // Faz o container ocupar toda a tela disponível
        justifyContent: 'center', // Alinha os itens no centro verticalmente
        alignItems: 'center', // Alinha os itens no centro horizontalmente
        padding: 20, // Espaçamento de 20 pixels nas bordas
        backgroundColor: '#fff4e1', // Cor de fundo do container (um tom claro)
    },
    image: {
        width: 300, // Largura da imagem
        height: 300, // Altura da imagem
        marginBottom: 20, // Espaçamento abaixo da imagem
        borderRadius: 8, // Bordas arredondadas na imagem
    },
    title: {
        fontSize: 24, // Tamanho da fonte do título
        color: '#821417', // Cor do título
        fontWeight: 'bold', // Deixa o título em negrito
        textAlign: 'center', // Alinha o texto do título ao centro
        marginBottom: 10, // Espaçamento abaixo do título
    },
    instructions: {
        fontSize: 16, // Tamanho da fonte das instruções
        color: '#bd4c42', // Cor das instruções
        textAlign: 'center', // Alinha o texto das instruções ao centro
        marginBottom: 20, // Espaçamento abaixo das instruções
    },
    // Estilos para o botão
    button: {
        backgroundColor: '#821417', // Cor de fundo do botão
        paddingVertical: 12, // Espaçamento vertical dentro do botão
        paddingHorizontal: 30, // Espaçamento horizontal dentro do botão
        borderRadius: 8, // Bordas arredondadas no botão
        marginTop: 20, // Espaçamento superior no botão
        shadowColor: '#000', // Cor da sombra
        shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra (em relação ao botão)
        shadowOpacity: 0.3, // Opacidade da sombra
        shadowRadius: 8, // Raio da sombra (quanto maior, mais suave)
        elevation: 5, // Elevação para Android, cria a sombra (valor típico)
    },
    buttonText: {
        color: '#fff', // Cor do texto do botão (branco)
        fontSize: 16, // Tamanho da fonte do texto do botão
        fontWeight: 'bold', // Texto em negrito
        textAlign: 'center', // Centraliza o texto dentro do botão
    },
});

// Exporta o componente MealApp para ser usado em outros lugares
export default MealApp;

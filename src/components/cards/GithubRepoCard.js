import { StarOutlined, IssuesCloseOutlined,RightOutlined} from "@ant-design/icons";
import moment from "moment";
import { useState } from "react";
import ReactApexChart from 'react-apexcharts';
import "../../assets/scss/GithubRepoCard.scss";



const GithubRepoCard = (props) => {
	const[value,setValue]=useState(true);
	const[state,setState]=useState(
		{
          
            series: [{
                name: "Week",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            },{
				name: "Changes",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
			}],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'Total Changes',
                align: 'center'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], 
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              }
            },
          
          
          }
        

	)
	const[red,setRed]=useState(
		{
          
            series: [{
                name: "Week",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            },{
				name: "Changes",
                data: [18, 30, 40, 60, 70, 90, 110, 120, 148]
            
			},{
				name:"Contributors",
				data: [15, 30, 40, 55, 63, 68, 75, 81, 150]
			}],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'Contributor Changes',
                align: 'center'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], 
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              }
            },
          
          
          }
        

	)


	const {Item}= props
	const Optmize = (total) => {
		if (total >= 1000)
			total = (total / 1000).toFixed(1).toString() + "K";
		return total;
	}

	return (
<>
		<div className="card">
			{
			value ?
		
			(
				<>
			<div className="thumb">
				<img src={Item?.owner?.avatar_url} alt={Item?.gravatar_id} />
			</div>
			<div className="infos">
				<div className="Title">{Item?.name}</div>
				<div className="desc">{Item?.description}</div>
				<div className="action">
					<div className="details">
						<StarOutlined /> Stars: {Optmize(Item?.stargazers_count)}
					</div>
					<div className="details">
						<IssuesCloseOutlined /> Issues: {Optmize(Item?.open_issues_count)}
					</div>
					<div className="datesection">
						<div className="date">
							Last Pushed{moment(Item?.created_at).fromNow()} by {Item?.owner?.login}
						</div>
					</div>
				</div>
			</div>
            <div>
            <RightOutlined className="icon" onClick={()=>setValue(false)}/>
            </div>
			</>
		):(<div>
  <div id="chart">
  <ReactApexChart options={state.options} series={state.series} type="line" height={300} width={1200} />
</div>
<div id="chart">
  <ReactApexChart options={red.options} series={red.series} type="line" height={300} width={1200} />
</div>
			</div>)
			
	   }
	   </div>
	   </>
	)
}

export default GithubRepoCard;
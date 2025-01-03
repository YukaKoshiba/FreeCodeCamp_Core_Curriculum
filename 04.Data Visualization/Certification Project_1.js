// Get JSON with the JavaScript XMLHttpRequest Method
// create an instance of XMLHttpRequest()
const req = new XMLHttpRequest();
let datasetOriginal = [];
let dataset = [];

// initialize a request(how, where, an asynchronous request)
req.open("GET", 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json', true);

// sends the request
req.send();
req.onload = function() {
    const json = JSON.parse(req.responseText);
    datasetOriginal = json.data;

    datasetOriginal.forEach(data => {
      const [dateString, gdp] = data;
      const year = parseInt(dateString.slice(0, 4));
      let quarter = "0";
      
      switch (dateString.slice(5, 7)) {
        case "01":
          quarter = " 1Q";
          break;
        case "04":
          quarter = " 2Q";
          break;
        case "07":
          quarter = " 3Q";
          break;
        case "10":
          quarter = " 4Q";
          break;
        default:
          quarter = "";
          console.log("Data fraud.", data);
      }
      
      dataset.push([dateString, gdp, year + quarter]); // [Date, GDP, Year, YearQuater]
    });
  
  const w = 1000;
  const h = 600;
  const padding = 100;
  const barWidth = 3;
  
  
   // Get minimum and maximum value in dataset
   const minDate = d3.min(dataset, d => new Date(d[0]));
   const maxDate = d3.max(dataset, d => new Date(d[0]));
  
  // Create Scale
  const xScale = d3.scaleTime()
                   .domain([minDate, maxDate])
                   .range([padding, w - 2*padding]);
  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(dataset, d => d[1])])
                   .range([h - padding, padding]);
  
  // Add svg to draw graph area
  const svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

  // Add each title
  const title = d3.select("svg")
                  .append("text")
                  .attr("x", w/2)
                  .attr("y", padding)
                  .attr("id", "title")
                  .attr("text-anchor", "middle")
                  .text("United States GDP")
                  .style("font-weight", "bold")
                  .style("font-size", "24px");
  
  const xtitle = d3.select("svg")
                    .append("text")
                    .attr("x", w/2)
                    .attr("y", h-padding/2)
                    .attr("id", "xtitle")
                    .attr("class", "tick")
                    .attr("text-anchor", "middle")
                    .text("Years(Quarters)");

  const ytitle = d3.select("svg")
                   .append("text")
                   .attr("x", 0)
                   .attr("y", h/2)
                   .attr("id", "ytitle")
                   .attr("class", "tick")
                   .text("Gross Domestic Product");
  
  const yunit = d3.select("svg")
                   .append("text")
                   .attr("x", padding / 2)
                   .attr("y", padding - 20)
                   .attr("id", "yunit")
                   .text("Billion")
                   .style("font-size", "12px");

  // Create axis
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);
  // Add axis
  svg.append("g")
  .attr("transform", `translate(0, ${h - padding})`)
  .attr("id", "x-axis")
  .call(xAxis);  // X-axis
 
  svg.append("g")
     .attr("transform", `translate(${padding}, 0)`)
     .attr("id", "y-axis")
     .call(yAxis); // Y-axis
  
  // ytitle
  svg.select("#ytitle")
     .attr("transform", "rotate(-90)")
     .attr("x", - 3*padding)  // Move left by half padding
     .attr("y", h - 5.5*padding)
     .attr("text-anchor", "middle");

  // Add bar data
  svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", d => xScale(new Date(d[0])))
    .attr("y", d => yScale(d[1]))
    .attr("width", barWidth)
    .attr("height", d => h - padding - yScale(d[1]))
    .attr("fill", "steelblue")
    .attr("class","bar")
    .attr("data-date", (d) => d[0])
    .attr("data-gdp", (d) => d[1]);
  console.log(dataset);
  
  // Add tooltip
  d3.selectAll(".bar")
    .on("mouseover", function(d) {
      // Get data for tooltip
      const date = d[2];
      const gdp = d[1];
    
      // Update tooltip content
      const tooltip = d3.select("#tooltip");
      tooltip.attr("data-date", d[0]);
      tooltip.html(`Date: ${date}<br>GDP: ${gdp} Billion`);
    
      // Change bar color
      d3.select(this).attr("fill", "white");

      // Position the tooltip
      const position = d3.mouse(this);
      tooltip.style("left", `${position[0] + 10}px`)
             .style("top", `${position[1] + 10}px`)
             .style("display", "block");
     })
     .on("mouseout", function() {
        // Return bar color
        d3.select(this).attr("fill", "steelblue");
        // Hide tooltip on mouseout
        d3.select("#tooltip").style("display", "none");
     });
     
     d3.select(this).attr("fill", "lightblue");  // Change fill color on hover
  }
